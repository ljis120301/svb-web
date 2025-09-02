"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ContainerTextFlipDemo } from "@/components/ui/container-text-flip-demo";
import { Button } from "@/components/ui/button";



type NetworkNode = {
  id: string;
  label?: string;
  x: number; // 0-100 (viewBox coords)
  y: number; // 0-100 (viewBox coords)
  isMain?: boolean;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function relaxNodes(initial: NetworkNode[], iterations = 180, minDistance = 10, bounds = { minX: 5, maxX: 95, minY: 8, maxY: 92 }): NetworkNode[] {
  const nodes = initial.map(n => ({ ...n }));
  for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
        if (dist < minDistance) {
          const overlap = (minDistance - dist) / 2;
          dx = (dx / dist) * overlap;
          dy = (dy / dist) * overlap;
          a.x = clamp(a.x + dx, bounds.minX, bounds.maxX);
          a.y = clamp(a.y + dy, bounds.minY, bounds.maxY);
          b.x = clamp(b.x - dx, bounds.minX, bounds.maxX);
          b.y = clamp(b.y - dy, bounds.minY, bounds.maxY);
        }
      }
    }
  }
  // Normalize to fill bounds more uniformly
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const n of nodes) {
    minX = Math.min(minX, n.x); maxX = Math.max(maxX, n.x);
    minY = Math.min(minY, n.y); maxY = Math.max(maxY, n.y);
  }
  const spanX = Math.max(1, maxX - minX);
  const spanY = Math.max(1, maxY - minY);
  for (const n of nodes) {
    n.x = bounds.minX + ((n.x - minX) / spanX) * (bounds.maxX - bounds.minX);
    n.y = bounds.minY + ((n.y - minY) / spanY) * (bounds.maxY - bounds.minY);
  }
  return nodes;
}

function buildConnections(nodes: NetworkNode[], maxPerNode = 3, maxDistance = 35) {
  const edges: Array<{ source: NetworkNode; target: NetworkNode }> = [];
  const edgeSet = new Set<string>();

  const keyFor = (a: NetworkNode, b: NetworkNode) => (a.id < b.id ? `${a.id}|${b.id}` : `${b.id}|${a.id}`);
  const addEdge = (a: NetworkNode, b: NetworkNode) => {
    if (a.id === b.id) return;
    const k = keyFor(a, b);
    if (edgeSet.has(k)) return;
    edgeSet.add(k);
    edges.push({ source: a, target: b });
  };

  // Initial connections within the distance budget
  nodes.forEach((n, i) => {
    const neighbors = nodes
      .map((m, j) => ({ m, j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
      .filter(v => v.j !== i && v.d <= maxDistance)
      .sort((a, b) => a.d - b.d)
      .slice(0, maxPerNode);
    neighbors.forEach(({ m }) => addEdge(n, m));
  });

  // Ensure every node has at least one connection by connecting to its nearest neighbor (prefer a main hub)
  const degree: Record<string, number> = Object.fromEntries(nodes.map(n => [n.id, 0]));
  edges.forEach(e => {
    degree[e.source.id] = (degree[e.source.id] || 0) + 1;
    degree[e.target.id] = (degree[e.target.id] || 0) + 1;
  });

  nodes.forEach((n, i) => {
    if (degree[n.id] > 0) return;
    const fallbackMaxDistance = Math.min(45, maxDistance + 12);
    const candidates = nodes
      .map((m, j) => ({ m, j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
      .filter(v => v.j !== i && v.d <= fallbackMaxDistance)
      .sort((a, b) => a.d - b.d);
    const preferred = candidates[0]?.m || null;
    if (preferred) {
      addEdge(n, preferred);
      degree[n.id] = (degree[n.id] || 0) + 1;
      degree[preferred.id] = (degree[preferred.id] || 0) + 1;
    } else {
      // Last resort: connect to absolute nearest to avoid isolation, even if slightly above fallbackMaxDistance
      const nearest = nodes
        .map((m, j) => ({ m, j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
        .filter(v => v.j !== i)
        .sort((a, b) => a.d - b.d)[0]?.m;
      if (nearest) {
        addEdge(n, nearest);
        degree[n.id] = (degree[n.id] || 0) + 1;
        degree[nearest.id] = (degree[nearest.id] || 0) + 1;
      }
    }
  });

  return edges;
}

export default function NetworkHero() {
  const initialNodes: NetworkNode[] = [
    { id: "yuma", label: "Yuma", x: 45, y: 55, isMain: true },
    { id: "wellton", label: "Wellton", x: 22, y: 62 },
    { id: "somerton", label: "Somerton", x: 57, y: 66 },
    { id: "fortuna", label: "Fortuna Foothills", x: 33, y: 44 },
    { id: "gadsden", label: "Gadsden", x: 66, y: 70 },
    { id: "brawley", label: "Brawley", x: 78, y: 38 },
    { id: "winterhaven", label: "Winterhaven", x: 71, y: 54 },
    { id: "holtville", label: "Holtville", x: 83, y: 33 },
    // additional relay nodes to fill space evenly
    { id: "relay-nw", x: 14, y: 18 },
    { id: "relay-n", x: 50, y: 12 },
    { id: "relay-ne", x: 88, y: 16 },
    { id: "relay-w", x: 10, y: 50 },
    { id: "relay-e", x: 92, y: 52 },
    { id: "relay-sw", x: 16, y: 85 },
    { id: "relay-s", x: 50, y: 90 },
    { id: "relay-se", x: 88, y: 84 },
  ];

  const nodes = useMemo(() => relaxNodes(initialNodes, 200, 12, { minX: 4, maxX: 96, minY: 6, maxY: 94 }), []);
  const edges = useMemo(() => buildConnections(nodes, 3, 34), [nodes]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background suggestion of map/area */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_45%_55%,theme(colors.primary)/10,transparent_50%)]" />
      </div>

      {/* Network overlay fills entire section */}
      <div className="absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="edgeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {edges.map((e, idx) => (
            <g key={`${e.source.id}-${e.target.id}`} filter="url(#softGlow)">
              <motion.line
                x1={e.source.x}
                y1={e.source.y}
                x2={e.target.x}
                y2={e.target.y}
                stroke="currentColor"
                strokeWidth={e.source.isMain || e.target.isMain ? 0.16 : 0.1}
                className="text-primary/50"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 3.2, delay: (idx % 8) * 0.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </g>
          ))}

          {nodes.map((n, i) => (
            <g key={n.id}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={n.isMain ? 1.2 : 0.9}
                fill="currentColor"
                className="text-primary/20"
                animate={{ scale: [1, 1.22, 1], opacity: [0.25, 0.65, 0.25] }}
                transition={{ duration: 3, delay: i * 0.12, repeat: Infinity }}
              />
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={n.isMain ? 0.55 : 0.35}
                fill="currentColor"
                className={n.isMain ? "text-primary" : "text-primary"}
                animate={{ scale: n.isMain ? [1, 1.15, 1] : [1, 1.08, 1] }}
                transition={{ duration: 2.2, delay: i * 0.08, repeat: Infinity }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="space-y-5">
              <ContainerTextFlipDemo />
            </div>
            {/* Primary actions */}
            <div className="flex w-full flex-col items-stretch sm:flex-row sm:justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact" aria-label="Get Started">
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="https://billing.beamspeed.net/" target="_blank" rel="noopener noreferrer" aria-label="Pay Bill">
                  Pay Bill
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
