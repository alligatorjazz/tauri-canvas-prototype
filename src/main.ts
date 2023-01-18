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

grid.moveTo(10, 0);
grid.lineTo(10, root.clientHeight);
app.stage.addChild(grid);