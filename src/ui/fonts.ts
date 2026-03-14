import { Orbitron } from "next/font/google";
import LocalFont from "next/font/local";

export const orbitron = Orbitron({
	subsets: ["latin"],
	weight: "variable",
	variable: "--font-orbitron",
});

export const SF_Pro = LocalFont({
	src: [
		{
			path: "../../public/SF_Pro/SFProText-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/SF_Pro/SFProText-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/SF_Pro/SFProText-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/SF_Pro/SFProText-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/SF_Pro/SFProText-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/SF_Pro/SFProText-Heavy.ttf",
			weight: "800",
			style: "normal",
		},
	],
	variable: "--font-sf-pro",
});
