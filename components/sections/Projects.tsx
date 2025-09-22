import Image from "next/image";

const items = [
	{ src: "https://images.unsplash.com/photo-1581093448798-5b9a99a58a32?q=80&w=1200&auto=format&fit=crop", alt: "Fiber splice", w: 1200, h: 800 },
	{ src: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop", alt: "Network cabinet", w: 1200, h: 800 },
	{ src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop", alt: "Field install", w: 1200, h: 800 },
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 bg-background overflow-x-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Recent Work</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">A glimpse at builds and upgrades across our service area</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
					{items.map((it, i) => (
						<div key={i} className="relative aspect-[3/2] overflow-hidden rounded-md border bg-card max-w-full">
							<Image src={it.src} alt={it.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


