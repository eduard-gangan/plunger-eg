"use client";

import Model from "@/components/Model";
import { Banana } from "@/components/Banana";
import { Canvas } from "@react-three/fiber";
import Misc from "@/components/Misc";
import { Suspense, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { Html, Center } from "@react-three/drei";

export default function Home() {
	const canvas = useRef();
	const model = useRef();
	const main = useRef();
	const [position, setposition] = useState([0, 1, 0]);
	const [rotation, setrotation] = useState([Math.PI / 12, 0, Math.PI / 6]);
	const [scale, setscale] = useState(0);

	const [positionB, setpositionB] = useState([1.5, -10, 0]);
	const [rotationB, setrotationB] = useState([0, -Math.PI / 2, -Math.PI / 2]);
	const [scaleB, setscaleB] = useState(0);

	// Animations

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);

			if (window.innerWidth < 768) {
				setscale(10);
				setscaleB(4);
			} else {
				setscale(15);
				setscaleB(6);
			}
			window.onresize = () => {
				if (window.innerWidth < 768) {
					setscale(10);
					setscaleB(4);
				} else {
					setscale(15);
					setscaleB(6);
				}
			};

			gsap.to(model.current, {
				scrollTrigger: {
					scrub: true,
					trigger: "#section2",
					start: "top bottom",
					end: "30% 50%",
					// markers: true,
					onUpdate: ({ progress }) => {
						setrotation([
							Math.PI / 12,
							Math.PI * progress,
							Math.PI / 6 - (Math.PI / 6) * progress,
						]);
						setposition([-1 * progress, 1 - progress, 0]);
					},
				},
			});

			gsap.to(model.current, {
				scrollTrigger: {
					scrub: true,
					trigger: "#section3",
					start: "top bottom",
					end: "30% 50%",
					// markers: true,
					onUpdate: ({ progress }) => {
						setrotation([
							Math.PI / 12 + (Math.PI / 12) * progress,
							Math.PI,
							((-Math.PI * 4) / 5) * progress,
						]);
						setposition([-1 - progress, progress, 0]);
						if (window.innerWidth < 768) {
							setscale(10 + progress * 10);
						} else {
							setscale(15 + progress * 15);
						}
					},
				},
			});

			gsap.to(model.current, {
				scrollTrigger: {
					scrub: true,
					trigger: "#section4",
					start: "top bottom",
					end: "30% 50%",
					// markers: true,
					onUpdate: ({ progress }) => {
						setrotation([
							Math.PI / 6 - (Math.PI / 9) * progress,
							Math.PI + Math.PI * progress,
							(-Math.PI * 4) / 5 + ((Math.PI * 4) / 5) * progress,
						]);
						setposition([-2 - 2.5 * progress, 1 + 0.3 * progress, 0]);
						if (window.innerWidth < 768) {
							setscale(20 - progress * 10);
						} else {
							setscale(30 - progress * 23);
						}
					},
				},
			});

			// animate banana
			gsap.to(model.current, {
				scrollTrigger: {
					scrub: 2,
					trigger: "#section4",
					start: "top bottom",
					end: "top top",
					onUpdate: ({ progress }) => {
						setpositionB([1.5, -10 + progress * 10, 0]);
						// setrotationB([
						// 	0,
						// 	(-Math.PI / 2) * progress,
						// 	(-Math.PI / 2) * progress,
						// ]);
					},
				},
			});

			const text = gsap.utils.toArray(".text-fade");
			text.forEach((el) => {
				gsap.from(el, {
					scale: 0.75,
					y: -40,
					opacity: 0,
					duration: 0.7,
					ease: "power4",
					scrollTrigger: {
						trigger: el,
						start: "top 95%",
						end: "top 30%",
						toggleActions: "play reverse play reverse",
						// scrub: true,
					},
				});
			});

			const items = gsap.utils.toArray(".items");
			items.forEach((el) => {
				gsap.from(el, {
					rotateX: "45deg",
					rotateY: "45deg",
					x: 60,
					opacity: 0,
					duration: 1,
					ease: "power3",
					scrollTrigger: {
						trigger: el,
						start: "top 75%",
						end: "top top",
						toggleActions: "play reverse play reverse",
					},
				});
			});

			const steps = gsap.utils.toArray(".steps");
			steps.forEach((el) => {
				gsap.from(el, {
					rotateX: "45deg",
					rotateY: "45deg",
					x: 100,
					opacity: 0,
					duration: 1,
					ease: "power3",
					scrollTrigger: {
						trigger: el,
						start: "top 75%",
						end: "top top",
						toggleActions: "play reverse play reverse",
					},
				});
			});

			gsap.to(".letter", {
				opacity: 0,
				scrollTrigger: {
					trigger: "#section4",
					start: "top 30%",
					end: "top top",
					scrub: 1,
					// markers: true,
				},
			});

			gsap.from(".banana", {
				y: 150,
				scrollTrigger: {
					trigger: "#section4",
					start: "top 30%",
					end: "top top",
					scrub: 1,
					// markers: true,
				},
			});
		},
		{ scope: main }
	);
	return (
		<main
			className="min-h-screen"
			ref={main}
		>
			<Canvas
				ref={canvas}
				style={{
					position: "fixed",
					width: "100vw",
					height: "100svh",
					zIndex: "5",
				}}
			>
				<Misc />
				<Suspense
					fallback={
						<Html>
							<div>Loading...</div>
						</Html>
					}
				>
					<Center position={position}>
						<Model
							ref={model}
							scale={scale}
							position={[0, 0, 0]}
							rotation={rotation}
						/>
					</Center>
				</Suspense>
				<Suspense
					fallback={
						<Html>
							<div>Loading...</div>
						</Html>
					}
				>
					<Center position={positionB}>
						<Banana
							position={[0, 0, 0]}
							scale={scaleB}
							rotation={rotationB}
						/>
					</Center>
				</Suspense>
			</Canvas>
			<section
				id="section1"
				className="min-h-screen grid content-end justify-center py-24 relative"
			>
				{/* <Link
					href="https://x.com/eduard_gangan"
					target="_blank"
					className="absolute top-1 right-2 text-zinc-700 text-lg"
				>
					@eduard_gangan
				</Link> */}
				<h1 className="text-8xl font-black bg-gradient-to-b from-zinc-600 to-zinc-950 bg-clip-text text-transparent font-heading leading-tight z-10 text-fade">
					The Plunger™
				</h1>
			</section>
			<section
				id="section2"
				className="min-h-screen grid p-8 relative"
			>
				<h2 className="self-end font-heading font-bold text-8xl z-10 *:bg-gradient-to-b *:from-zinc-600 *:to-zinc-950 *:bg-clip-text *:text-transparent leading-tight">
					<div className="text-fade">The Perfect</div>
					<div className="text-fade">Multitool</div>
				</h2>
				<ul className="absolute justify-self-end even:*:text-zinc-600 odd:*:text-zinc-800 text-3xl list-disc grid gap-2 font-heading m-8">
					<li className="items">Unclog toilets</li>
					<li className="items">Open wine bottles</li>
					<li className="items">Mash potatoes</li>
					<li className="items">Stylish hat</li>
					<li className="items">Go fishing</li>
					<li className="items">Scoop ice-cream</li>
					<li className="items">Beat your sister</li>
				</ul>
			</section>
			<section
				id="section3"
				className="min-h-screen relative overflow-hidden"
			>
				<div className="absolute max-w-80 text-lg text-zinc-700 left-1/3 top-36 before:absolute before:content-['1'] before:text-10xl before:-left-20 before:top-4 before:font-heading before:text-zinc-400/50 z-10 before:-z-10 steps">
					The plunger's suction cup grips any surface with incredible strength,
					tackling clogs effortlessly every time.
				</div>
				<div className="absolute max-w-80 text-lg text-zinc-700 right-[20%] top-80 before:absolute before:content-['2'] before:text-10xl before:-left-28 before:top-4 before:font-heading before:text-zinc-400/50 z-10 before:-z-10 steps">
					Crafted precisely, the suction cup forms an airtight seal, ensuring
					efficiency on all surfaces.
				</div>
				<div className="absolute max-w-80 text-lg text-zinc-700 right-24 top-132 before:absolute before:content-['3'] before:text-10xl before:-left-24 before:font-heading before:text-zinc-400/50 z-10 before:-z-10 steps">
					This ideal plunger's suction cup is versatile, perfect for creative
					uses and unique household hacks.
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					x="0px"
					y="0px"
					enableBackground="new 0 0 100 100"
					className="fill-zinc-400/50 absolute -left-12 top-0 -rotate-12"
					viewBox="20.83 11.93 62.88 75.5"
					width={1400}
					height={1400}
				>
					<g>
						<path
							className="line-path"
							d="M82.7,87.424c-0.48,0-0.904-0.347-0.985-0.836c-0.003-0.014-0.242-1.444-0.831-3.866c-0.131-0.537,0.199-1.078,0.735-1.208   c0.533-0.133,1.077,0.199,1.208,0.735c0.608,2.502,0.851,3.951,0.86,4.011c0.091,0.545-0.278,1.06-0.822,1.15   C82.81,87.419,82.754,87.424,82.7,87.424z M80.825,79.609c-0.435,0-0.835-0.286-0.96-0.725c-0.362-1.264-0.754-2.542-1.163-3.801   c-0.171-0.525,0.117-1.089,0.642-1.26c0.529-0.169,1.089,0.116,1.261,0.642c0.416,1.28,0.814,2.582,1.183,3.868   c0.152,0.531-0.154,1.084-0.686,1.237C81.01,79.597,80.917,79.609,80.825,79.609z M78.348,71.985c-0.408,0-0.792-0.252-0.939-0.659   c-0.451-1.239-0.929-2.488-1.421-3.711c-0.206-0.512,0.042-1.095,0.555-1.301c0.511-0.208,1.094,0.042,1.301,0.555   c0.5,1.244,0.986,2.513,1.444,3.773c0.189,0.519-0.078,1.093-0.598,1.282C78.577,71.966,78.461,71.985,78.348,71.985z    M75.356,64.553c-0.384,0-0.75-0.222-0.915-0.596c-0.539-1.216-1.101-2.428-1.67-3.602c-0.241-0.497-0.034-1.095,0.463-1.336   c0.498-0.241,1.096-0.034,1.336,0.463c0.58,1.195,1.151,2.428,1.699,3.665c0.224,0.505-0.004,1.096-0.509,1.319   C75.629,64.525,75.491,64.553,75.356,64.553z M71.861,57.348c-0.358,0-0.705-0.193-0.885-0.532c-0.62-1.17-1.266-2.338-1.921-3.47   c-0.276-0.478-0.112-1.09,0.366-1.366c0.477-0.278,1.089-0.113,1.366,0.365c0.666,1.153,1.324,2.343,1.956,3.536   c0.259,0.488,0.072,1.093-0.416,1.352C72.179,57.311,72.019,57.348,71.861,57.348z M67.854,50.418   c-0.332,0-0.657-0.166-0.848-0.467c-0.706-1.122-1.438-2.236-2.177-3.31c-0.313-0.455-0.197-1.078,0.258-1.391   c0.456-0.312,1.077-0.197,1.391,0.258c0.753,1.097,1.501,2.233,2.222,3.377c0.294,0.467,0.153,1.085-0.313,1.379   C68.221,50.368,68.036,50.418,67.854,50.418z M63.324,43.822c-0.305,0-0.605-0.138-0.802-0.401   c-0.789-1.054-1.609-2.104-2.438-3.119c-0.35-0.428-0.286-1.058,0.143-1.407c0.428-0.35,1.058-0.285,1.406,0.143   c0.847,1.037,1.684,2.108,2.49,3.185c0.331,0.442,0.24,1.069-0.201,1.399C63.743,43.757,63.532,43.822,63.324,43.822z    M58.262,37.628c-0.274,0-0.549-0.113-0.746-0.334c-0.874-0.979-1.782-1.951-2.699-2.89c-0.387-0.395-0.379-1.028,0.016-1.414   c0.396-0.385,1.03-0.379,1.414,0.017c0.938,0.96,1.867,1.954,2.762,2.956c0.367,0.412,0.332,1.044-0.08,1.412   C58.737,37.544,58.499,37.628,58.262,37.628z M52.67,31.912c-0.244,0-0.489-0.089-0.682-0.268   c-0.968-0.902-1.962-1.784-2.954-2.623c-0.422-0.356-0.475-0.987-0.118-1.409c0.354-0.42,0.987-0.476,1.409-0.118   c1.017,0.859,2.034,1.763,3.026,2.686c0.404,0.376,0.427,1.009,0.05,1.414C53.205,31.805,52.938,31.912,52.67,31.912z    M46.564,26.751c-0.212,0-0.425-0.067-0.606-0.206c-1.042-0.797-2.116-1.577-3.194-2.319c-0.455-0.313-0.569-0.936-0.256-1.391   c0.313-0.453,0.934-0.569,1.391-0.256c1.105,0.761,2.207,1.562,3.274,2.378c0.438,0.335,0.522,0.963,0.187,1.402   C47.163,26.616,46.865,26.751,46.564,26.751z M39.982,22.219c-0.179,0-0.36-0.048-0.524-0.149   c-1.117-0.689-2.264-1.358-3.409-1.987c-0.484-0.266-0.661-0.874-0.396-1.358c0.267-0.485,0.876-0.661,1.358-0.395   c1.175,0.645,2.351,1.331,3.497,2.038c0.47,0.29,0.615,0.906,0.325,1.376C40.646,22.051,40.317,22.219,39.982,22.219z    M32.98,18.372c-0.146,0-0.295-0.032-0.436-0.101c-1.18-0.573-2.388-1.122-3.591-1.633c-0.509-0.216-0.746-0.803-0.529-1.312   c0.215-0.508,0.808-0.744,1.311-0.529c1.234,0.524,2.474,1.088,3.683,1.675c0.497,0.241,0.704,0.839,0.463,1.336   C33.708,18.165,33.352,18.372,32.98,18.372z M25.631,15.246c-0.115,0-0.231-0.02-0.346-0.062c-1.223-0.45-2.479-0.878-3.737-1.274   c-0.527-0.166-0.82-0.727-0.654-1.254c0.166-0.526,0.725-0.82,1.254-0.654c1.288,0.405,2.576,0.844,3.829,1.305   c0.518,0.191,0.783,0.766,0.593,1.284C26.421,14.995,26.038,15.246,25.631,15.246z"
						></path>
					</g>
				</svg>
			</section>
			<section
				id="section4"
				className="min-h-screen grid content-center p-8 font-bold relative"
			>
				<h2 className="leading-tight text-8xl font-heading *:bg-gradient-to-b *:from-zinc-600 *:to-zinc-950 *:bg-clip-text *:text-transparent grid">
					<div>Order your</div>
					<div className="justify-self-center text-[18rem] opacity-50">
						P<span className="letter">l</span>unger
					</div>
					<div className="justify-self-end">Today</div>
				</h2>
				<div className="absolute left-1/2 -translate-x-1/2 bottom-32 text-lg text-zinc-500 banana">
					( Banana for scale )
				</div>
			</section>
		</main>
	);
}
