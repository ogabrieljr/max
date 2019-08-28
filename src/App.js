import React, { Component } from "react";
import Person from "./Person";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{ id: "1", name: "NAME", age: 23 },
				{ id: "2", name: "NAME2", age: 33 },
				{ id: "3", name: "NAME3", age: 43 }
			],
			showPersons: false
		};
	}
	tooglePerson = () => {
		const show = this.state.showPersons;
		this.setState({ showPersons: !show });
	};

	nameChange = (e, id) => {
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === id;
		});
		const person = {
			...this.state.persons[personIndex]
		};
		// const person = Object.assign({}, this.state.persons[personIndex])
		person.name = e.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({
			persons: persons
		});
	};


	deletePerson = index => {
		// const persons = this.state.persons.slice()
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons });
	};


	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								key={person.id}
								deletePerson={this.deletePerson}
								name={person.name}
								age={person.age}
								nameChange={e => this.nameChange(e, person.id)}
							/>
						);
					})}
				</div>
			);
		}
		return (
			<div>
				<button onClick={this.tooglePerson}>btn</button>
				{persons}
			</div>
		);
	}
}
