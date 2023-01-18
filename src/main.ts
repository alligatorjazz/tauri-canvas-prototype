import { Application, Sprite, Graphics } from "pixi.js";

console.log("hello world");

const root = document.getElementById("root");

if (!root) {
	throw new ReferenceError("Element with id \"#root\" could not be found.");
}

const app = new Application({ width: root.clientWidth, height: root.clientHeight });
root.appendChild(app.view as unknown as HTMLCanvasElement);

// Create the sprite and add it to the stage
// let sprite = Sprite.from('32x32.png');
// app.stage.addChild(sprite);

// // Add a ticker callback to move the sprite back and forth
// let elapsed = 0.0;
// app.ticker.add((delta) => {
// 	elapsed += delta;
// 	sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
// });

// Create a Graphics object, set a fill color, draw a rectangle
const grid = new Graphics();

grid.lineStyle({
	width: 1,
	color: 0xffffff,
	alignment: 0.5
});

for (let i = 0; i < 100; i++) {
	const incrementX = root.clientWidth / 100;
	const incrementY = root.clientHeight / 100;

	grid.moveTo(i * incrementX, 0);
	grid.lineTo(i * incrementX, root.clientHeight);

	grid.moveTo(0, i * incrementY);
	grid.lineTo(root.clientWidth, i * incrementY);
}


app.stage.addChild(grid);