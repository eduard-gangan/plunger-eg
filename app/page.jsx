import ModelView from "@/components/ModelView";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen">
			<ModelView />
			<section className="min-h-screen grid content-end justify-center py-24 z-10 relative">
				{/* <Link
					href="https://x.com/eduard_gangan"
					target="_blank"
					className="absolute top-1 right-2 text-zinc-700 text-lg"
				>
					@eduard_gangan
				</Link> */}
				<h1 className="text-8xl font-black bg-gradient-to-b from-zinc-600 to-zinc-950 bg-clip-text text-transparent font-heading leading-tight">
					The Plunger™
				</h1>
			</section>
		</main>
	);
}
