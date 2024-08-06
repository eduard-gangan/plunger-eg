"use client";

export function Model(props) {
	const { nodes, materials } = useGLTF("/assets/models/plunger_2k.gltf");
	const model = useRef();
	useGSAP(
		() => {
			let tl = gsap.timeline({ paused: true });
			gsap.to(model.current.position, {
				x: "+=1",
				ease: "none",
				repeatRefresh: true,
				repeat: -1,
			});
		},
		{ scope: model }
	);
	return (
		<group
			ref={model}
			{...props}
			dispose={null}
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
