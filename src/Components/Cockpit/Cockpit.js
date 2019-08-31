import React from "react";
import Validation from "./Validation";
import Char from "./Char";

export default function Cockpit(props) {
	const classes = [];
	const charList = props.username
		.split("")
		.map((character, index) => (
			<Char deleteCharacter={props.deleteCharacter} key={index} character={character} />
		));
	if (props.username.length < 5) classes.push("red");
	if (props.username.length >= 5) classes.push("blue bold");
	return (
		<div>
			<div>
				<input onChange={props.usernameChange} value={props.username} />
				<p className={classes}>{props.username}</p>
				<Validation usernameLength={props.username.length} />
				{charList}
			</div>
		</div>
	);
}
