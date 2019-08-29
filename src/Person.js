import React from "react";

export default function Person(props) {
	const style = {
		display: "inline-block",
		padding: "15px",
		margin: "15px",
		border: "1px solid black"
	};
	return (
		<div>
			<p style={style} onClick={props.deletePerson}>
				{props.name}, {props.age}
			</p>
			<input onChange={props.nameChange} />
		</div>
	);
}
