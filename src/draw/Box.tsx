import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh } from "three";

const Box = (props: MeshProps) => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<Mesh>();

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
		if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.x += 0.03;
		if (mesh.current) mesh.current.rotation.y = mesh.current.rotation.y += 0.03;
	});

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [2.5, 2.5, 7] : [1, 1, 1]}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
};

export default Box;