"use client";

import { useGLTF } from "@react-three/drei";

export function Banana(props) {
	const { nodes, materials } = useGLTF("/assets/models/banana/scene.gltf");
	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_2.geometry}
				material={materials["ripe-banana_u1_v1"]}
				position={[-0.02, 5.75, -4.742]}
				rotation={[0.133, 0.003, 0.025]}
				scale={0.006}
			/>
		</group>
	);
}

useGLTF.preload("/assets/models/banana/scene.gltf");
