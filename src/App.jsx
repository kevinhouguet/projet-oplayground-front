import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className="flex">
				<a className="flex-auto" href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
				</button>
				<button className="btn btn-primary">Test daisyUI</button>
			</div>
		</div>
	);
}

export default App;
