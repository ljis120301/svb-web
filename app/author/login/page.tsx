"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";

export default function AuthorLoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/author";
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }
      router.replace(next);
    } catch (err: any) {
      setError("Unexpected error");
      setLoading(false);
    }
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Author Login" }
  ];

  return (
    <PageLayout breadcrumbs={breadcrumbs} contentMaxWidth="3xl">
      <div className="mx-auto max-w-sm">
        <h1 className="text-2xl font-semibold">Author Login</h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Admin Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:opacity-90"
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
