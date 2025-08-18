export default function FeatureCardsGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="h-full">
          <div className="relative rounded-2xl p-[1px] h-full">
            <div className="relative overflow-hidden rounded-2xl h-full border border-white/60 bg-white/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-neutral-950/60">
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                    <div>
                      <div className="mb-1 h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                      <div className="h-5 w-48 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                  <div className="h-4 w-11/12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                  <div className="h-4 w-10/12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                </div>
                <div className="mt-auto pt-6 flex justify-end">
                  <div className="h-8 w-24 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

