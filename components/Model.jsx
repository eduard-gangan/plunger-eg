"use client";

import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF(
		"/assets/models/plunger/plunger_2k.gltf"
	);
	return (
		<group
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

useGLTF.preload("/assets/models/plunger/plunger_2k.gltf");
