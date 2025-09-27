"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

type NextThemesProviderProps = ComponentProps<typeof NextThemesProvider>;

export default function ThemeProvider({ children, ...props }: NextThemesProviderProps) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}


