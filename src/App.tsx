import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import styles from "./App.module.scss";
import { RenderCanvas } from "./components/RenderCanvas";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<div className={styles.App}>
			{/* <h1>Welcome to Test!</h1> */}
			<h2>Graphics Error? Couldn't be me!</h2>
			<p>Click on the Tauri, Vite, and React logos to learn more.</p>

			<div className="rowƒ">
				<div>
					<input
						id="greet-input"
						onChange={(e) => setName(e.currentTarget.value)}
						placeholder="Enter a name..."
					/>
					<button type="button" onClick={() => greet()}>
						Greet
					</button>
				</div>
			</div>
			<p>{greetMsg}</p>
			<RenderCanvas />
		</div>
	);
}

export default App;
