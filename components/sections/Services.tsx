"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IconHome, IconWifi, IconHelpCircle, IconBuildingSkyscraper, IconBolt, IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons-react";

type ServiceItem = {
	title: string;
	description: string;
	icon: React.ComponentType<{ size?: number; className?: string }>;
	details: string;
};

const services: ServiceItem[] = [
	{
		title: "Fiber Internet",
		description: "Symmetric speeds with ultra‑low latency for home and business.",
		icon: IconDeviceDesktop,
		details: "Our fiber‑first network delivers reliable, low‑latency connectivity ideal for streaming, gaming, remote work, and business operations. Enjoy consistent performance at peak hours with no data caps."
	},
	{
		title: "Home Networking",
		description: "Whole‑home Wi‑Fi with expert router placement and setup.",
		icon: IconWifi,
		details: "We optimize Wi‑Fi coverage across your home with proper access point placement, interference reduction, and secure configuration for every device."
	},
	{
		title: "Business Solutions",
		description: "Static IPs, priority routing, and resilient connectivity.",
		icon: IconBuildingSkyscraper,
		details: "Business‑grade services include static IP addressing, traffic prioritization, and uptime‑focused deployments tailored to your operations."
	},
	{
		title: "Legacy Wireless",
		description: "Reliable fixed wireless where fiber isn’t available yet.",
		icon: IconBolt,
		details: "We provide dependable fixed wireless service in areas awaiting fiber build‑out, ensuring you’re connected while we expand the network."
	},
	{
		title: "Kitchen‑table Help",
		description: "Friendly support for everyday connectivity questions.",
		icon: IconHelpCircle,
		details: "From device setup to simple troubleshooting, our local team helps keep your home online without the jargon."
	},
	{
		title: "Smart Home Setup",
		description: "Set up cameras, thermostats, and connected devices securely.",
		icon: IconDeviceMobile,
		details: "We onboard smart devices with proper network isolation and best‑practice security so your home stays both convenient and safe."
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
		<section id="services" className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Connectivity solutions for homes and businesses in Yuma and Imperial Valley
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
					{services.map((service, index) => (
						<Card key={`service-${index}`} className="overflow-hidden transition-all hover:shadow-lg bg-card text-card-foreground border-border">
							<CardHeader className="p-4 md:p-6">
								<div className="text-4xl mb-2">
									{React.createElement(service.icon, { size: 32 })}
								</div>
								<CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
							</CardHeader>
							<CardContent className="p-4 md:p-6 pt-0">
								<CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
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
												{service.details}
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


