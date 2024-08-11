import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Inter({ subsets: ["latin"] });
const merri = Merriweather({
	subsets: ["latin"],
	weight: ["400", "300", "700", "900"],
	variable: "--heading-font",
});

export const metadata = {
	title: "The Plunger",
	metadataBase: "https://plunger-eg.netlify.app",
	description:
		"The plunger's suction cup grips any surface with incredible strength, tackling clogs every time. Crafted precisely, the suction cup forms an airtight seal, ensuring efficiency on all surfaces. This ideal plunger's suction cup is versatile, perfect for creative uses and unique household hacks.",
	openGraph: {
		title: "The Plunger",
		description:
			"The plunger's suction cup grips any surface with incredible strength, tackling clogs every time. Crafted precisely, the suction cup forms an airtight seal, ensuring efficiency on all surfaces. This ideal plunger's suction cup is versatile, perfect for creative uses and unique household hacks.",
		images: "/assets/img/plunger.png",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Plunger",
		description:
			"The plunger's suction cup grips any surface with incredible strength, tackling clogs every time. Crafted precisely, the suction cup forms an airtight seal, ensuring efficiency on all surfaces. This ideal plunger's suction cup is versatile, perfect for creative uses and unique household hacks.",
		image: "/assets/img/plunger.png",
	},
	// icons: {
	// 	shortcut: { url: "/favicon.ico", type: "image/x-icon" },
	// 	icon: [
	// 		{ url: "/favicon.ico", type: "image/x-icon" },
	// 		{ url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
	// 		{ url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
	// 	],
	// 	apple: [
	// 		{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
	// 	],
	// 	manifest: "/site.webmanifest",
	// },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${merri.variable} bg-zinc-200`}>
				<SmoothScroller>{children}</SmoothScroller>
			</body>
		</html>
	);
}
