"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeColorMeta() {
	const { theme, resolvedTheme } = useTheme();

	useEffect(() => {
		// Use actual background colors based on theme for proper Safari browser UI
		const lightColor = "#ffffff"; // Light mode background
		const darkColor = "#000F08"; // Dark mode background (--svb-night-black)
		
		// Determine the correct theme color based on resolved theme
		const themeColor = resolvedTheme === "dark" ? darkColor : lightColor;
		
		// Simple, focused theme-color update
		const updateThemeColor = () => {
			const existingMetas = document.querySelectorAll("meta[name='theme-color']");
			existingMetas.forEach(meta => meta.remove());
			
			const meta = document.createElement("meta");
			meta.name = "theme-color";
			meta.content = themeColor;
			document.head.appendChild(meta);
		};

		// Update theme-color meta tag
		updateThemeColor();

		// Force Safari to recognize background color changes immediately
		const forceSafariBackgroundUpdate = () => {
			const body = document.body;
			const html = document.documentElement;
			
			if (body && html) {
				// Force background color to be applied immediately
				body.style.backgroundColor = themeColor;
				html.style.backgroundColor = themeColor;
				
				// Trigger a minimal reflow without causing glitches
				body.offsetHeight;
				
				// Remove the inline styles to let CSS take over
				setTimeout(() => {
					body.style.backgroundColor = "";
					html.style.backgroundColor = "";
				}, 16);
			}
		};

		// Execute background update
		forceSafariBackgroundUpdate();
		
		// iOS-specific meta tags (simplified)
		let appleMeta = document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']");
		if (appleMeta) appleMeta.remove();
		
		appleMeta = document.createElement("meta");
		appleMeta.setAttribute("name", "apple-mobile-web-app-status-bar-style");
		appleMeta.setAttribute("content", resolvedTheme === "dark" ? "black-translucent" : "default");
		document.head.appendChild(appleMeta);

		// PWA capable
		let pwaCapable = document.querySelector("meta[name='apple-mobile-web-app-capable']");
		if (!pwaCapable) {
			pwaCapable = document.createElement("meta");
			pwaCapable.setAttribute("name", "apple-mobile-web-app-capable");
			pwaCapable.setAttribute("content", "yes");
			document.head.appendChild(pwaCapable);
		}
		
	}, [theme, resolvedTheme]);

	return null;
}


