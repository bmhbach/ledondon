import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Box from "./draw/Box";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Canvas>
					<ambientLight intensity={0.5} />
					<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
					<pointLight position={[-10, -10, -10]} />
					<Box position={[0, 0, 0]} />
				</Canvas>
				<p>
          ledondon
				</p>
			</header>
		</div>
	);
};

export default App;
