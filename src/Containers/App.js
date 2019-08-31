import React, { Component } from "react";
import "./App.css";
import Radium from "radium";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{ id: "a", name: "NAME", age: 23 },
				{ id: "b", name: "NAME2", age: 33 },
				{ id: "c", name: "NAME3", age: 43 }
			],
			showPersons: false,
			username: ""
		};
	}
	nameChange = (event, id) => {
		const personIndex = this.state.persons.findIndex(person => person.id === id);
		const persons = [...this.state.persons];
		persons[personIndex].name = event.target.value;
		this.setState({ persons });
	};
	deletePerson = id => {
		const personIndex = this.state.persons.findIndex(person => person.id === id);
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons });
	};
	personsToggle = () => this.setState({ showPersons: !this.state.showPersons });
	usernameChange = e => this.setState({ username: e.target.value });
	deleteCharacter = index => {
		const text = this.state.username.split("");
		text.splice(index, 1);
		const updatedText = text.join("");
		this.setState({ username: updatedText });
	};
	render() {
		const style = {
			backgroundColor: "green",
			color: "white",
			border: "1px solid blue",
			padding: "5px",
			cursor: "pointer",
			":hover": {
				backgroundColor: "lightgreen",
				color: "black"
			}
		};
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					deletePerson={this.deletePerson}
					nameChange={this.nameChange}
				/>
			);
			style.backgroundColor = "red";
			style[":hover"] = {
				backgroundColor: "salmon",
				color: "black"
			};
		}
		return (
			<div>
				<button style={style} onClick={this.personsToggle}>
					button
				</button>
				{persons}
				<Cockpit
					deleteCharacter={this.deleteCharacter}
					username={this.state.username}
					usernameChange={this.usernameChange}
				/>
			</div>
		);
	}
}

export default Radium(App);
