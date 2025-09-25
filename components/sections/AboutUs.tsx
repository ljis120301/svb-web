import Image from "next/image";

export default function AboutUs() {
	return (
		<section id="about" className="py-20 bg-background overflow-x-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">About Us</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Local, reliable internet built by people who live here
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-full">
					<div className="order-2 md:order-1">
						<h3 className="text-xl md:text-2xl font-semibold mb-4">Our Story</h3>
						<p className="text-muted-foreground mb-4 text-sm md:text-base">
							We’re building a fiber‑first network across Yuma and the Imperial Valley with a focus on quality service, transparent pricing, and friendly support.
						</p>
						<p className="text-muted-foreground mb-4 text-sm md:text-base">
							From installation to ongoing support, our team works to deliver consistent performance and a great experience—without the hassle.
						</p>
						<h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">Our Values</h3>
						<ul className="list-disc pl-5 text-muted-foreground space-y-2 text-sm md:text-base">
							<li>Fast, reliable connectivity</li>
							<li>Honest, responsive support</li>
							<li>Local investment and community focus</li>
							<li>No gimmicks, no hidden fees</li>
						</ul>
					</div>
					<div className="relative h-[300px] md:h-[400px] w-full max-w-full rounded-lg overflow-hidden order-1 md:order-2">
						<Image 
							src="/web-images/logos/Transparent-Logo-4-1-2.webp"
							alt="Sun Valley Broadband"
							fill
							className="object-contain bg-zinc-500"
							sizes="(max-width: 768px) 100vw, 50vw"
							priority={false}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}


