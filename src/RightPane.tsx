import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";
import "./RightPane.css"
import { chatService, ConversationDto } from "./ChatService";
import { MessageCard } from "./MessageCard";

export function RightPane({ conversation, onBack }: { conversation?: ConversationDto, onBack?: () => void }) {
	let [message, setMessage] = useState("");
	return <div class="RightPane">
		{!!conversation && <>
			<div class="conversation-header">
				<button class="back-button" onClick={onBack}>
					<span>&#8592;</span> Back
				</button>
				<p>{conversation.name}</p>

			</div>
			<div class="messages">
				{conversation.lastMessages.map(x =>
					<MessageCard key={x.timeStamp} message={x}
						own={x.senderId === chatService.inbox.user.id} />)}
			</div>
			<TextInputAndButton value={message} onChange={setMessage}
				buttonContent="Send" placeholder="Write a message..."
				onClick={() => {
					chatService.send({
						type: "message", channelId: conversation.channelId, referenceTo: 0, contentType:
							0, content: message
					});
					setMessage("");
				}} />
		</>}
	</div>
}
