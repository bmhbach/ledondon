import React, {useEffect} from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Box from "./draw/Box";
import {animated, useSpring} from "react-spring/web";
import {Canvas_Widget} from "./tiny-graphics";
import {Minimal_Webgl_Demo} from "./main-scene";

declare global {
    interface Window { mainscene: any; }
}

window.mainscene = window.mainscene || {};

const App = () => {
	useEffect(() => {
		const scenes = [ "mainscene" ];
		window.mainscene = Minimal_Webgl_Demo;
		new Canvas_Widget("main-canvas", scenes);
	}, []);
	return (
		null
	);
};

export default App;
