"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import {
	ContactShadows,
	OrthographicCamera,
	RandomizedLight,
	useGLTF,
} from "@react-three/drei";
import {
	Center,
	Environment,
	Html,
	OrbitControls,
	PerspectiveCamera,
	SpotLight,
} from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ModelView = () => {
	const canvas = useRef();
	const model = useRef();
	const [x, setx] = useState(0);
	return (
		<Canvas
			ref={canvas}
			style={{
				position: "fixed",
				width: "100vw",
				height: "100svh",
			}}
		>
			<OrthographicCamera
				makeDefault
				position={[0, 0, 100]}
				zoom={100}
			/>
			<directionalLight
				position={[10, 10, 10]}
				intensity={4}
				castShadow
			/>
			<Environment
				preset="city"
				environmentIntensity={2}
			/>
			{/* <OrbitControls /> */}

			<Suspense
				fallback={
					<Html>
						<div>Loading...</div>
					</Html>
				}
			>
				<Center position={[x, 1, 0]}>
					<Model
						setx={setx}
						scale={15}
						position={[0, 0, 0]}
						rotation={[Math.PI / 12, 0, Math.PI / 6]}
					/>
				</Center>
			</Suspense>
		</Canvas>
	);
};

function Model({ setx, scale, position, rotation }) {
	const { nodes, materials } = useGLTF("/assets/models/plunger_2k.gltf");
	const model = useRef();
	// useFrame((state, delta) => {
	// 	model.current.rotation.y += delta / 2;
	// });
	return (
		<group
			scale={scale}
			position={position}
			rotation={rotation}
			dispose={null}
			ref={model}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.plunger.geometry}
				material={materials.plunger}
			/>
		</group>
	);
}

useGLTF.preload("/assets/models/plunger_2k.gltf");

export default ModelView;
