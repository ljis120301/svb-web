"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeColorMeta() {
	const { theme } = useTheme();

	useEffect(() => {
		// Always use SVB accent to avoid an initial black/white flash in browser UI
		const desired = "#FF8B1F"; // svb-accent
		const metas = Array.from(document.querySelectorAll("meta[name='theme-color']"));
		if (metas.length === 0) {
			const meta = document.createElement("meta");
			meta.name = "theme-color";
			meta.content = desired;
			document.head.appendChild(meta);
		} else {
			metas.forEach((m) => m.setAttribute("content", desired));
		}
		// Ensure iOS doesn't force a black status bar before theme-color applies
		let appleMeta = document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']");
		if (!appleMeta) {
			appleMeta = document.createElement("meta");
			appleMeta.setAttribute("name", "apple-mobile-web-app-status-bar-style");
			document.head.appendChild(appleMeta);
		}
		appleMeta.setAttribute("content", "default");
	}, [theme]);

	return null;
}


