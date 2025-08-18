export default function GoogleReviewsMarqueeSkeleton() {
  return (
    <section className="mt-12 w-full">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-7 w-7 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-7 w-48 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>
      </div>
      <div className="h-[22rem] w-full items-center justify-center overflow-hidden">
        <div className="mx-auto h-full w-full max-w-none bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
      </div>
    </section>
  );
}

