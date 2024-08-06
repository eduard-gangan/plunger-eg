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
	title: "Creative Studio",
	// metadataBase: "https://studio-eg.netlify.app",
	// description: "We design and build kick-ass experiences",
	// openGraph: {
	// 	title: "Creative Studio",
	// 	description: "We design and build kick-ass experiences",
	// 	images: "/assets/img/blob.jpg",
	// },
	// twitter: {
	// 	card: "summary_large_image",
	// 	title: "Creative Studio",
	// 	description: "We design and build kick-ass experiences",
	// 	image: "/assets/img/blob.jpg",
	// },
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
