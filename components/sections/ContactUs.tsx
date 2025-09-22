import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
	return (
		<section id="contact" className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Get a Free Quote</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Tell us your address and we’ll confirm fiber availability and options.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact">
							<Button size="lg" className="text-lg px-8 cursor-pointer">Contact us</Button>
						</Link>
						<Link href="/fiber">
							<Button size="lg" variant="outline" className="text-lg px-8 cursor-pointer">View plans</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}


