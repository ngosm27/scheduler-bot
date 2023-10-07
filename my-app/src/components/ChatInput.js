// src/components/ChatInput.js
import React, { useState, useEffect, useRef } from "react";

function ChatInput({ onSendMessage, isLoading }) {
	const [messageText, setMessageText] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleInputChange = (e) => {
		setMessageText(e.target.value);
	};

	const handleSendClick = () => {
		if (messageText.trim() !== "") {
			onSendMessage(messageText);
			setMessageText("");
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			// If the user presses Enter, trigger the "Send" action
			handleSendClick();
		}
	};

	return (
		<div className="chat-input">
			<input
				type="text"
				placeholder={!isLoading ? "Type a message..." : ""}
				value={messageText}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				ref={inputRef}
				disabled={isLoading} // Disable the input field when isLoading is true
			/>
			<button
				onClick={handleSendClick}
				style={isLoading ? { display: "none" } : {}}
			>
				{">"}
			</button>
		</div>
	);
}

export default ChatInput;
