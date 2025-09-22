"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	// Return a loading state during SSR to avoid hydration issues
	if (!mounted) {
		return (
			<div className="min-h-screen bg-background">
				{children}
			</div>
		);
	}

	// Only render once client-side to avoid hydration mismatch
	return (
		<NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
			{children}
		</NextThemesProvider>
	);
}


