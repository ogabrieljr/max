import React, { Component } from "react";
import Person from "./Person";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{ id: "a", name: "NAME", age: 23 },
				{ id: "b", name: "NAME2", age: 33 },
				{ id: "c", name: "NAME3", age: 43 }
			],
			showPersons: false
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
	render() {
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
			</div>
		);
	}
}
