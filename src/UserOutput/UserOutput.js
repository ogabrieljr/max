import React from "react";
import "./userOutput.css";

export default function UserOutput(props) {
	return (
		<div className="userOutput">
			<p>{props.userName}</p>
			<p></p>
		</div>
	);
}
