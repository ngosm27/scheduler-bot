// src/components/Chat.js
import React, { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import Loader from "./Loader";

function Chat() {
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const chatContainerRef = useRef(null);

	const handleSendMessage = (messageText) => {
		// Display user's input as a bubble immediately
		const newUserMessage = { text: messageText, user: "user" };

		// Add the user's input message and loader
		setMessages((prevMessages) => [
			...prevMessages,
			newUserMessage,
			{ loading: true, user: "assistant" }, // Loader message
		]);

		setIsLoading(true);

		// Simulate ChatGPT response (you can replace this with an API call)
		setTimeout(() => {
			// Create the response message
			const response = "the winning team (⁠~⁠‾⁠▿⁠‾⁠)⁠~!";
			const newResponse = { text: response, user: "assistant" };

			// Replace the loader message with the actual response
			setMessages((prevMessages) =>
				prevMessages.map((message) =>
					message.loading ? newResponse : message
				)
			);
			setIsLoading(false);

			// Scroll to the bottom of the chat container after the response is added
			scrollToBottom();
		}, 5000); // Wait for 2 seconds before showing the response
	};

	const scrollToBottom = () => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	};

	useEffect(() => {
		// Scroll to the bottom of the chat container after rendering messages
		scrollToBottom();
	}, [messages]);

	return (
		<div className="chat-container">
			<div className="chat-messages" ref={chatContainerRef}>
				{messages.map((message, index) => (
					<div
						key={index}
						className={`message ${
							message.user === "user" ? "user" : "assistant"
						}`}
					>
						{message.text}
					</div>
				))}
				{isLoading && <Loader />}{" "}
				{/* Conditional rendering of the loader */}
			</div>
			<ChatInput
				onSendMessage={handleSendMessage}
				isLoading={isLoading}
			/>
		</div>
	);
}

export default Chat;
