import Image from "next/image";

export function ProductBanner({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={true}
        fetchPriority="high"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-end p-6">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}


