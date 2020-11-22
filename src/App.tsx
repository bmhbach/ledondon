import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Box from "./draw/Box";
import {animated, useSpring} from "react-spring/web";

const colors = [
	"lightgreen",
	"lightblue",
	"lightpink",
	"lightgoldenrodyellow",
	"lightsalmon",
	"lightcoral",
	"lightseagreen",
	"lightskyblue",
	"lightslategrey",
];

const getRandomColor = () => {
	return colors[Math.round(Math.random() * colors.length) % colors.length];
};

const App = () => {
	const props1 = useSpring({
		from: { left: "0%", top: "0%", width: "0%", height: "0%", background: "lightgreen" },
		to: async (next: any) => {
			const condition = true;
			while (condition) {
				const left = Math.random() * 50;
				const width = Math.max(Math.random() * 70, 25);
				const top = Math.random() * 50;
				const height = Math.max(Math.random() * 70, 25);
				const color = getRandomColor();
				console.log({left, top, width, height});
				await next({ left: left + "%", top: top + "%", width: width + "%", height: height + "%", background: color });
			}
		},
	});
	const props2 = useSpring({
		from: { left: "0%", top: "0%", width: "0%", height: "0%", background: "lightgreen" },
		to: async (next: any) => {
			const condition = true;
			while (condition) {
				const left = Math.random() * 50;
				const width = Math.max(Math.random() * 70, 25);
				const top = Math.random() * 50;
				const height = Math.max(Math.random() * 70, 25);
				const color = getRandomColor();
				await next({ left: left + "%", top: top + "%", width: width + "%", height: height + "%", background: color });
			}
		},
	});
	const props3 = useSpring({
		from: { left: "0%", top: "0%", width: "0%", height: "0%", background: "lightgreen" },
		to: async (next: any) => {
			const condition = true;
			while (condition) {
				const left = Math.random() * 50;
				const width = Math.max(Math.random() * 70, 25);
				const top = Math.random() * 50;
				const height = Math.max(Math.random() * 70, 25);
				const color = getRandomColor();
				await next({ left: left + "%", top: top + "%", width: width + "%", height: height + "%", background: color });
			}
		},
	});
	const props4 = useSpring({
		from: { left: "0%", top: "0%", width: "0%", height: "0%", background: "lightgreen" },
		to: async (next: any) => {
			const condition = true;
			while (condition) {
				const left = Math.random() * 50;
				const width = Math.max(Math.random() * 70, 25);
				const top = Math.random() * 50;
				const height = Math.max(Math.random() * 70, 25);
				const color = getRandomColor();
				await next({ left: left + "%", top: top + "%", width: width + "%", height: height + "%", background: color });
			}
		},
	});
	return (
		<div className="App">
			<header className="App-header">
				<p>ledondon</p>
			</header>
			<div className="container">
				<animated.div className="script-box" style={props1} />
				<animated.div className="script-box" style={props2} />
				<animated.div className="script-box" style={props3} />
				<animated.div className="script-box" style={props4} />
				<Canvas className="Canvas">
					<ambientLight intensity={0.5} />
					<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
					<pointLight position={[-10, -10, -10]} />
					<Box position={[0, 0, 0]} />
				</Canvas>
			</div>
		</div>
	);
};

export default App;
