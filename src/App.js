import React, { Component } from "react";
import Person from "./Person";
import Char from "./Char";
import Validation from "./Validation";

export default class App extends Component {
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
		const charList = this.state.username
			.split("")
			.map((character, index) => (
				<Char deleteCharacter={this.deleteCharacter} key={index} character={character} />
			));
		let persons = null;
		if (this.state.showPersons) {
			persons = this.state.persons.map(person => (
				<Person
					deletePerson={() => this.deletePerson(person.id)}
					nameChange={e => this.nameChange(e, person.id)}
					key={person.id}
					name={person.name}
					age={person.age}
				/>
			));
		}
		return (
			<div>
				<button onClick={this.personsToggle}>btn</button>
				{persons}
				<div>
					<input onChange={this.usernameChange} value={this.state.username} />
					<p>{this.state.username}</p>
					<Validation usernameLength={this.state.username.length} />
					{charList}
				</div>
			</div>
		);
	}
}
