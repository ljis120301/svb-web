export default function AceternityHeroSkeleton() {
  return (
    <section className="relative w-full overflow-hidden min-h-[60vh] md:min-h-[58vh]">
      <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-800 animate-pulse" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-28">
        <div className="mx-auto h-10 w-4/5 max-w-4xl rounded bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-6">
          <div className="h-12 w-60 rounded-md bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
          <div className="h-12 w-60 rounded-md bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

