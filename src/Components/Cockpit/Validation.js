import React from "react";

export default function Validation(props) {
	let message = "text long enough";
	if (props.usernameLength < 5) message = "text too short";
	return <p>{message}</p>;
}
// <div>{props.usernameLength > 5 ? <p>text long enough</p> : <p>text too short</p>}</div>
