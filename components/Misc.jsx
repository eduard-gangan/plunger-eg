"use client";

import {
	OrthographicCamera,
	Environment,
	OrbitControls,
} from "@react-three/drei";

const Misc = () => {
	return (
		<>
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
		</>
	);
};

export default Misc;
