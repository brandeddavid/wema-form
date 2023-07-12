"use client";
import "./globals.css";
import type { Metadata } from "next";
import { theme } from "../theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<body className="flex flex-col items-center justify-between min-h-screen md:p-24">
					{children}
				</body>
			</ThemeProvider>
		</html>
	);
}
