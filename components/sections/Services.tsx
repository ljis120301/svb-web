"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IconHome, IconWifi, IconHelpCircle, IconBuildingSkyscraper, IconBolt, IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/link-preview";

type ServiceItem = {
	title: string;
	description: string | (() => React.ReactNode);
	icon: React.ComponentType<{ size?: number; className?: string }>;
	details: string | (() => React.ReactNode);
};

const services: ServiceItem[] = [
	{
		title: "DTH Fiber Internet",
		description: "Blazing fast fiber optic internet with affordable pricing.",
		icon: IconDeviceDesktop,
		details: () => (
			<>
				<span className="block mb-3">
					Our <strong className="font-semibold">fiber‑first network</strong> delivers reliable, <em>low‑latency connectivity</em> ideal for{" "}
					<span className="font-medium">streaming, gaming, remote work,</span> and business operations.
				</span>
				<span className="block mb-3">
					<span className="font-bold text-primary">✓ No data caps</span> • <span className="font-bold text-primary">✓ Consistent performance at peak hours</span> •{" "}
					<span className="font-bold text-primary">✓ Symmetrical upload speeds</span>
				</span>
				<span className="block text-sm text-muted-foreground italic">
					Experience the difference that fiber makes. Perfect for households with multiple devices and bandwidth‑intensive applications.
				</span>
			</>
		)
	},
	{
		title: "Wireless Setup",
		description: "Whole‑home Wi‑Fi with expert router placement and setup.",
		icon: IconWifi,
		details: () => (
			<>
				<span className="block mb-3">
					We optimize Wi‑Fi coverage across your entire home with <strong>professional access point placement</strong>, interference reduction, and{" "}
					<span className="font-semibold">secure configuration</span> for every device.
				</span>
				<span className="block mb-3">
					<strong className="text-primary">Why Choose Our Wireless Setup?</strong>
				</span>
				<ul className="list-disc list-inside space-y-1 text-sm mb-3">
					<li>Our <em>certified technicians</em> are experts in wireless network optimization</li>
					<li>Proper placement eliminates dead zones and maximizes coverage</li>
					<li>Enterprise‑grade security protocols protect your network</li>
					<li>Personalized setup for your home's unique layout</li>
				</ul>
				<span className="block text-sm font-medium">
					<em>Your satisfaction is guaranteed.</em> We ensure you have the best possible wireless experience before we leave.
				</span>
			</>
		)
	},
	{
		title: "Business Solutions",
		description: "We can offer Static IPv4 addresses, as well as higher priority service",
		icon: IconBuildingSkyscraper,
		details: () => (
			<>
				<span className="block mb-3">
					We partner with <strong className="font-semibold">businesses throughout Yuma and Imperial County</strong> to deliver enterprise‑grade connectivity solutions tailored to your needs.
				</span>
				<span className="block mb-3">
					<strong className="text-primary">Business Features Include:</strong>
				</span>
				<ul className="list-disc list-inside space-y-1 text-sm mb-3">
					<li>
						<span className="font-medium">Static IPv4 addresses</span> for hosting servers, VPNs, and remote access
					</li>
					<li>
						<span className="font-medium">Dedicated ethernet lines</span> for mission‑critical applications
					</li>
					<li>
						<span className="font-medium">Priority support</span> with guaranteed response times
					</li>
					<li>
						<span className="font-medium">Custom SLA options</span> tailored to your business requirements
					</li>
				</ul>
				<span className="block text-sm italic text-muted-foreground mb-3">
					<em>For specific business needs or larger scale projects,</em> our team works directly with you to design the perfect solution.
				</span>
				<span className="block text-sm">
					Learn more about our <LinkPreview url="/contact">business services</LinkPreview> or reach out directly.
				</span>
			</>
		)
	},
	{
		title: "Legacy Wireless",
		description: "Reliable fixed wireless where fiber isn't available yet.",
		icon: IconBolt,
		details: () => (
			<>
				<span className="block mb-3">
					We provide <strong className="font-semibold">dependable fixed wireless service</strong> in areas awaiting fiber build‑out, ensuring you're{" "}
					<em>connected now</em> while we expand our fiber network.
				</span>
				<span className="block mb-3">
					<strong className="text-primary">Reliable Coverage Where You Need It</strong>
				</span>
				<span className="block text-sm mb-3">
					Our fixed wireless solution delivers consistent internet access using proven technology. <span className="font-medium">No need to wait</span>—get
					connected today and we'll keep you informed as fiber expansion reaches your area.
				</span>
				<span className="block text-sm italic">
					<em>Upgrade path available:</em> When fiber arrives in your neighborhood, seamless migration options are available.
				</span>
			</>
		)
	},
	{
		title: "USA based Technical Support ",
		description: () => (
			<span>
				Tech Support based right here in Yuma. Always available <span className="font-bold">8am-8pm</span>
			</span>
		),
		icon: () => <span className="text-2xl">🇺🇸</span>,
		details: () => (
			<>
				<span className="block mb-3">
					<strong className="text-primary text-base">No more waiting on hold for hours.</strong> No more struggling to understand support agents in distant call centers.
				</span>
				<span className="block mb-3">
					<em className="font-semibold">We're different.</em> All our technical support is{" "}
					<span className="font-bold">100% in‑house</span>, based right here in <strong>Yuma, Arizona</strong>. Your support team speaks your language,
					understands your local needs, and <span className="font-medium">actually solves problems</span>—not just follow scripts.
				</span>
				<span className="block mb-3">
					<strong>Available 8am‑8pm, Monday through Friday:</strong>
				</span>
				<ul className="list-disc list-inside space-y-1 text-sm mb-3">
					<li>
						<span className="font-medium">Phone:</span> Quick answers when you need them most
					</li>
					<li>
						<span className="font-medium">Email:</span> Detailed technical assistance
					</li>
					<li>
						<span className="font-medium">Online Portal:</span> <LinkPreview url="/support">Access our support portal</LinkPreview> for tickets and resources
					</li>
				</ul>
				<span className="block text-sm italic">
					<em>Real people. Real solutions. Right here in your community.</em>
				</span>
			</>
		)
	},
	{
		title: "Pop Up Event Internet",
		description: "Have a local event that requires an internet connection? We have you covered.",
		icon: IconDeviceMobile,
		details: () => (
			<>
				<span className="block mb-3">
					<strong className="font-semibold">Planning a local event?</strong> Don't let unreliable internet ruin your day. We specialize in{" "}
					<span className="font-medium">temporary high‑speed connections</span> for festivals, markets, fairs, and corporate events.
				</span>
				<span className="block mb-3">
					<strong className="text-primary">Proven Track Record:</strong>
				</span>
				<span className="block text-sm mb-3">
					We're the trusted provider for the <em className="font-medium">Yuma County Fair Grounds</em>, delivering reliable internet service for the{" "}
					<strong>Yuma Fair each year</strong>. Thousands of attendees, vendors, and organizers depend on our network.
				</span>
				<span className="block mb-3">
					<strong>What We Provide:</strong>
				</span>
				<ul className="list-disc list-inside space-y-1 text-sm mb-3">
					<li>
						<span className="font-medium">Point‑of‑sale connectivity</span>—ensure credit card payments never fail
					</li>
					<li>
						<span className="font-medium">Live streaming capabilities</span> for broadcasting your event
					</li>
					<li>
						<span className="font-medium">Reliable backup options</span> if your primary connection fails
					</li>
					<li>
						<span className="font-medium">Professional setup and support</span> on‑site during your event
					</li>
				</ul>
				<span className="block text-sm italic">
					<em>From small gatherings to large festivals</em>—we'll ensure your event runs smoothly. <LinkPreview url="/contact">Contact us</LinkPreview> to discuss
					your event's internet needs.
				</span>
			</>
		)
	}
];

export default function Services() {
	const [openDialog, setOpenDialog] = useState<number | null>(null);

	const handleGetQuote = () => {
		const contactSection = document.getElementById("contact");
		if (!contactSection) return;
		const navbarHeight = 80;
		const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
		setOpenDialog(null);
		const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
		const scrollDelay = isFirefox ? 300 : 100;
		setTimeout(() => {
			if (isFirefox) {
				window.scrollTo(0, targetPosition);
				setTimeout(() => {
					const currentPos = window.pageYOffset;
					const contactPos = document.getElementById("contact")?.getBoundingClientRect().top ?? 0 + window.pageYOffset - navbarHeight;
					if (Math.abs(currentPos - contactPos) > 100) {
						window.scrollTo(0, contactPos);
					}
				}, 100);
			} else {
				window.scrollTo({ top: targetPosition, behavior: "smooth" });
			}
			if (history.pushState) {
				history.pushState(null, "", "#contact");
			}
		}, scrollDelay);
	};

	return (
		<section id="services" className="py-20 bg-background overflow-x-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Connectivity solutions for homes and businesses in Yuma and Imperial Valley
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-full">
					{services.map((service, index) => (
						<Card key={`service-${index}`} className="overflow-hidden transition-all hover:shadow-lg bg-card text-card-foreground border-border">
							<CardHeader className="p-4 md:p-6">
								<div className="text-4xl mb-2">
									{React.createElement(service.icon, { size: 32 })}
								</div>
								<CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
							</CardHeader>
							<CardContent className="p-4 md:p-6 pt-0">
								<CardDescription className="text-sm md:text-base">
									{typeof service.description === "function" ? service.description() : service.description}
								</CardDescription>
							</CardContent>
							<CardFooter className="p-4 md:p-6 pt-0">
								<Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
									<DialogTrigger asChild>
										<Button variant="ghost" className="text-sm hover:bg-accent hover:text-accent-foreground w-full py-6 md:py-2 cursor-pointer">
											Learn more →
										</Button>
									</DialogTrigger>
									<DialogContent className="sm:max-w-[600px] z-[100] p-4 md:p-6 [&>button]:cursor-pointer">
										<DialogHeader>
											<DialogTitle className="text-xl md:text-2xl flex items-center gap-2">
												{React.createElement(service.icon, { size: 24 })}
												{service.title}
											</DialogTitle>
											<DialogDescription className="text-sm md:text-base">
												{typeof service.details === "function" ? service.details() : service.details}
											</DialogDescription>
										</DialogHeader>
										<div className="mt-4">
											<Button className="w-full py-6 md:py-2 cursor-pointer" onClick={handleGetQuote}>
												Get Started
											</Button>
										</div>
									</DialogContent>
								</Dialog>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}


