"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Wifi,
  Gauge,
  Check,
  Router,
  Zap,
  Signal,
  Star,
} from "lucide-react";
import type { ReactNode } from "react";

// Switch hero layouts here - Improved variants based on feedback
// Options: 'mesh-gradient' | 'glassmorphism' | 'neural-network' | 'morphing-shapes'
type HeroVariant =
  | "mesh-gradient"      // Safe, polished gradient mesh design
  | "glassmorphism"      // Extended glassmorphism with better header integration
  | "neural-network"     // Network overlay on Yuma County map with connected nodes
  | "morphing-shapes"    // Slower, more natural morphing animations  

const HERO_VARIANT: HeroVariant = "neural-network";

export default function AceternityHero() {
  switch (HERO_VARIANT) {
    case "glassmorphism":
      return <HeroGlassmorphism />;
    case "neural-network":
      return <HeroNeuralNetwork />;
    case "morphing-shapes":
      return <HeroMorphingShapes />;
    case "mesh-gradient":
    default:
      return <HeroMeshGradient />;
  }
}

function BadgePill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function PrimaryCta({ href = "/contact", children = "Check availability" }: { href?: string; children?: ReactNode }) {
  return (
    <Link href={href} className={`${buttonVariants({ variant: "default" })} group w-full sm:w-auto`}>
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function SecondaryCta() {
  return (
    <Link href="https://billing.beamspeed.net/" target="_blank" rel="noopener noreferrer" className={`${buttonVariants({ variant: "outline" })} w-full sm:w-auto`}>
      Pay bill
    </Link>
  );
}

function TrustRow() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-3">
      <div className="flex items-center gap-2">
        <Gauge className="h-4 w-4 text-primary" />
        <span>Up to 500 Mbps down</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-primary" />
        <span>No data caps</span>
      </div>
      <div className="flex items-center gap-2">
        <Wifi className="h-4 w-4 text-primary" />
        <span>Local support</span>
      </div>
    </div>
  );
}

// 1) Mesh Gradient - AI-style gradient mesh with flowing patterns
function HeroMeshGradient() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary)/30,transparent_50%),radial-gradient(circle_at_70%_80%,theme(colors.accent)/20,transparent_50%),radial-gradient(circle_at_90%_40%,theme(colors.primary)/25,transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,theme(colors.primary)/10_25%,transparent_50%,theme(colors.accent)/10_75%,transparent_100%)] animate-spin" style={{ animationDuration: "20s" }} />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-lg"
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BadgePill>Building fiber across Yuma & Imperial Valley</BadgePill>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
            >
              Fiber internet for Yuma and Imperial Valley
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 max-w-3xl mx-auto text-xl leading-8 text-muted-foreground"
            >
              Fast uploads, low latency, and rock‑solid reliability from a local team. Check your address to see if fiber is live on your street.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <PrimaryCta />
              <SecondaryCta />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12"
            >
              <TrustRow />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 2) Glassmorphism - Extended glassmorphism with better header integration
function HeroGlassmorphism() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Extended glassmorphism background that reaches into header area */}
      <div className="absolute -top-20 inset-x-0 bottom-0 bg-gradient-to-br from-primary/15 via-background to-accent/15" />
      <div className="absolute -top-20 inset-x-0 bottom-0 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      {/* Floating glass orbs in background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full backdrop-blur-md bg-white/5 border border-white/10"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-32 w-24 h-24 rounded-full backdrop-blur-md bg-white/5 border border-white/10"
        />
      </div>
      
      <div className="relative z-10 flex min-h-screen items-center px-4">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <BadgePill>Building fiber across Yuma & Imperial Valley</BadgePill>
              <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Fiber internet for Yuma and Imperial Valley
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
                Fast uploads, low latency, and rock‑solid reliability from a local team. Check your address to see if fiber is live on your street.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryCta />
                <SecondaryCta />
              </div>
              
              <div className="mt-12">
                <TrustRow />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              {/* Enhanced glassmorphism card with better visual hierarchy */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl transform rotate-3" />
                <div className="relative backdrop-blur-xl bg-white/15 dark:bg-black/15 border border-white/30 dark:border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground">Fiber Performance</div>
                      <div className="mt-2 text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        500
                      </div>
                      <div className="text-lg font-medium text-muted-foreground">Mbps Download</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 rounded-xl p-4 border border-white/20">
                        <div className="text-3xl font-bold text-primary">50</div>
                        <div className="text-sm text-muted-foreground">Upload</div>
                      </div>
                      <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 rounded-xl p-4 border border-white/20">
                        <div className="text-3xl font-bold text-accent">5ms</div>
                        <div className="text-sm text-muted-foreground">Latency</div>
                      </div>
                    </div>
                    
                    <div className="text-center pt-2">
                      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Network Status: Optimal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3) Neural Network - Network overlay on Yuma County map with connected nodes
function HeroNeuralNetwork() {
  // Yuma County area nodes positioned like real towns/areas
  const yumaNodes = [
    { id: 'yuma', label: 'Yuma', x: 45, y: 55, isMain: true },
    { id: 'wellton', label: 'Wellton', x: 25, y: 60, isMain: false },
    { id: 'somerton', label: 'Somerton', x: 55, y: 65, isMain: false },
    { id: 'fortuna', label: 'Fortuna Foothills', x: 35, y: 45, isMain: false },
    { id: 'gadsden', label: 'Gadsden', x: 65, y: 70, isMain: false },
    { id: 'brawley', label: 'Brawley', x: 75, y: 40, isMain: false },
    { id: 'winterhaven', label: 'Winterhaven', x: 70, y: 55, isMain: false },
    { id: 'holtville', label: 'Holtville', x: 80, y: 35, isMain: false },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/5 to-background">
      {/* Map-style background with subtle geographical hints */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_45%_55%,theme(colors.primary)/10,transparent_50%)]" />
      </div>

      {/* Network visualization overlaying the map */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Network connections between cities */}
          {yumaNodes.map((node, i) => (
            <g key={`connections-${node.id}`}>
              {yumaNodes.slice(i + 1).map((targetNode, j) => {
                const distance = Math.sqrt((node.x - targetNode.x) ** 2 + (node.y - targetNode.y) ** 2);
                return distance < 40 ? (
                  <motion.line
                    key={`${node.id}-${targetNode.id}`}
                    x1={node.x}
                    y1={node.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke="currentColor"
                    strokeWidth={node.isMain || targetNode.isMain ? "0.15" : "0.08"}
                    className="text-primary/40"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      pathLength: { duration: 2 },
                      opacity: { 
                        duration: 4, 
                        delay: i * 0.2 + j * 0.1,
                        repeat: Infinity,
                      },
                    }}
                  />
                ) : null;
              })}
            </g>
          ))}
          
          {/* City nodes */}
          {yumaNodes.map((node, i) => (
            <g key={node.id}>
              {/* Node glow */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.isMain ? "1.5" : "1"}
                fill="currentColor"
                className="text-primary/20"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
              
              {/* Main node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.isMain ? "0.6" : "0.3"}
                fill="currentColor"
                className={node.isMain ? "text-accent" : "text-primary"}
                animate={{ 
                  scale: node.isMain ? [1, 1.2, 1] : [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <BadgePill>Building fiber across Yuma & Imperial Valley</BadgePill>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                Fiber internet for Yuma and Imperial Valley
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-8 max-w-2xl text-xl leading-8 text-muted-foreground"
              >
                Fast uploads, low latency, and rock‑solid reliability from a local team. Check your address to see if fiber is live on your street.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <PrimaryCta />
                <SecondaryCta />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-12"
              >
                <TrustRow />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5"
            >
              {/* Network status card overlaying the map */}
              <div className="relative backdrop-blur-sm bg-card/80 border border-border/50 rounded-2xl p-6 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="text-sm font-medium text-muted-foreground">Network Coverage</div>
                  <div className="text-3xl font-bold text-primary">8 Cities</div>
                  <div className="text-sm text-muted-foreground">Connected & Growing</div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="text-center p-3 rounded-lg bg-primary/10">
                      <div className="text-lg font-bold text-primary">500</div>
                      <div className="text-xs text-muted-foreground">Mbps Max</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-accent/10">
                      <div className="text-lg font-bold text-accent">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      All systems operational
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4) Morphing Shapes - Slower, more natural morphing animations
function HeroMorphingShapes() {
  const shapes = [
    { id: 1, type: 'circle', size: 100, x: 20, y: 30 },
    { id: 2, type: 'square', size: 80, x: 70, y: 20 },
    { id: 3, type: 'triangle', size: 60, x: 15, y: 70 },
    { id: 4, type: 'diamond', size: 90, x: 80, y: 75 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/5 to-background">
      {/* Morphing background shapes */}
      <div className="absolute inset-0">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute opacity-20 bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              borderRadius: [
                shape.type === 'circle' ? '50%' : '0%',
                shape.type === 'square' ? '0%' : '50%',
                shape.type === 'triangle' ? '0% 50% 50%' : '50%',
                shape.type === 'diamond' ? '0% 50% 50% 50%' : '0%',
                shape.type === 'circle' ? '50%' : '0%',
              ],
              rotate: [0, 45, 90, 135, 180],
              scale: [1, 1.05, 0.95, 1.02, 1],
              x: [0, 10, -8, 5, 0],
              y: [0, -5, 8, -3, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.id * 2,
            }}
          />
        ))}
      </div>

      {/* Fluid wave effect */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="url(#wave-gradient)"
            animate={{
              d: [
                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
                "M0,60 Q25,40 50,60 T100,40 L100,100 L0,100 Z",
                "M0,40 Q25,60 50,40 T100,60 L100,100 L0,100 Z",
                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" className="text-primary/20" />
              <stop offset="100%" stopColor="currentColor" className="text-accent/20" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
            >
              <BadgePill>Building fiber across Yuma & Imperial Valley</BadgePill>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <motion.span
                animate={{
                  background: [
                    "linear-gradient(45deg, theme(colors.primary), theme(colors.accent))",
                    "linear-gradient(135deg, theme(colors.accent), theme(colors.primary))",
                    "linear-gradient(225deg, theme(colors.primary), theme(colors.accent))",
                    "linear-gradient(315deg, theme(colors.accent), theme(colors.primary))",
                    "linear-gradient(45deg, theme(colors.primary), theme(colors.accent))",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Fiber internet for
              </motion.span>
              <motion.span
                animate={{
                  transform: [
                    "perspective(1000px) rotateX(0deg)",
                    "perspective(1000px) rotateX(2deg)",
                    "perspective(1000px) rotateX(-2deg)",
                    "perspective(1000px) rotateX(0deg)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block"
              >
                Yuma and Imperial Valley
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 max-w-3xl mx-auto text-xl leading-8 text-muted-foreground"
            >
              Fast uploads, low latency, and rock‑solid reliability from a local team. Check your address to see if fiber is live on your street.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <PrimaryCta />
              <SecondaryCta />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-16"
            >
              <TrustRow />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}