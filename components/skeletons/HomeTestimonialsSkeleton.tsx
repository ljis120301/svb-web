export default function HomeTestimonialsSkeleton() {
  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <div className="absolute inset-0 rounded-3xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <div>
            <div className="h-7 w-40 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="mt-2 h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="mt-8 space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <div className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

