import type { Metadata } from "next";
import { orbitron, SF_Pro } from "@/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Zirus Developer",
	description: "The official developer page for Zirus, the next-gen web game",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={`${orbitron.variable} ${SF_Pro.variable} ${SF_Pro.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
