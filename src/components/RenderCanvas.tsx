import styles from "./RenderCanvas.module.scss";
import { Application as PixiApp, ICanvas, Sprite } from "pixi.js";
import { useCallback, useEffect, useState } from "react";

export function RenderCanvas() {
	const [pixi, loadPixiApp] = useState<PixiApp<ICanvas>>();

	const view = useCallback((viewNode: HTMLCanvasElement) => {
		if (viewNode && !pixi) {
			loadPixiApp(new PixiApp({ width: 500, height: 500, view: viewNode }))
		}
	}, []);

	useEffect(() => {
		if (pixi) {
			console.log("loading sprite..")
			let sprite = Sprite.from('vite.svg');
			pixi.stage.addChild(sprite);
		}
	}, [pixi])

	return <canvas ref={view}></canvas>;
}