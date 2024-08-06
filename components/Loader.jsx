"use client";

const Loader = ({ progress }) => {
	return (
		<div
			className={[
				`fixed ${
					progress >= 100 && "opacity-0 pointer-events-none"
				} bg-zinc-900 top-0 left-0 h-screen w-screen grid place-content-center gap-4 z-50 transition-opacity duration-300`,
			]}
		>
			{/* <img
				src="/assets/spinner.svg"
				alt="website loading"
			/> */}
			<div className="text-base grid justify-items-center gap-2 text-white">
				<div className="w-48 h-8 rounded-3xl border-2 border-zinc-300 relative overflow-hidden grid place-content-center">
					<p className="z-10">{progress.toFixed(0)}%</p>
					<div
						className={`absolute left-0 w-full h-full origin-left bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 transition-transform duration-200`}
						style={{
							transform: `scale(${progress / 100}, 100%)`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
