import React from "react";

export default function Person(props) {
	return (
		<div>
			Hello, {props.name}, {props.age}
			<p>{props.children}</p>
		</div>
	);
}
