import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh, Vector3 } from "three";

const Box = (props: MeshProps) => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<Mesh>();

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	const [sizes, setSizes] = useState(new Vector3(1,1,1));
	const [time, setTime] = useState(0);

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
		if (mesh.current)
			mesh.current.rotation.x = mesh.current.rotation.x += 0.03;
		if (mesh.current)
			mesh.current.rotation.y = mesh.current.rotation.y += 0.03;

		if (mesh.current)
			mesh.current.position.x += Math.sin(Math.PI * 2 * time / 600 + (Math.PI / 2)) * 0.035;
		if (mesh.current)
			mesh.current.position.y += Math.sin(Math.PI * 2 * time / 300 + (Math.PI / 2)) * 0.035;

		setTime(time + 1);
	});

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? sizes : [1, 1, 1]}
			onClick={(event) => {
				if (!active)
					setSizes(new Vector3(Math.random() * 2.5, Math.random() * 2.5, Math.random() * 2.5));
				setActive(!active);
			}}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "lightyellow" : "lightblue"} />
		</mesh>
	);
};

export default Box;