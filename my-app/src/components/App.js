// src/components/App.js
import React from "react";
import "./App.css";
import Chat from "./Chat";

function App() {
	return (
		<div className="app-container">
			<div className="app-header pixelated-text">
				<h1>GMU Course Selector Bot</h1>
			</div>
			<div className="chat-container pixelated-text">
				<Chat />
			</div>
		</div>
	);
}

export default App;
