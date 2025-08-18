export default function AppleCardsListSkeleton() {
  return (
    <div className="relative w-full">
      <div className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20">
        <div className="mx-auto max-w-7xl flex flex-row justify-start gap-4 pl-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="rounded-3xl last:pr-[5%] md:last:pr-[33%]">
              <div className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-neutral-200 md:h-[40rem] md:w-96 dark:bg-neutral-800 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
      <div className="mr-10 flex justify-end gap-2">
        <div className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 animate-pulse" />
        <div className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 animate-pulse" />
      </div>
    </div>
  );
}

