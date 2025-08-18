export default function FAQSkeleton() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-3 h-6 w-28 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        <div className="mx-auto h-8 w-72 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mb-2 h-5 w-3/5 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
              <div className="h-4 w-11/12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

