import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import "./Main.css"
import { useState } from "preact/hooks";
import { ConversationDto } from "./ChatService";

export function Main() {
	let [selected, setSelected] = useState<ConversationDto>();

	let mainClass = "Main " + (selected ? "right" : "left");
	return <div className={mainClass}>
		<LeftPane selected={selected} onSelect={setSelected} />
		<RightPane conversation={selected}
			onBack={() => setSelected(undefined)} />
	</div>
}

