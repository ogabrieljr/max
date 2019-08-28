import React, { Component } from "react";
import Person from "./Person";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{ name: "NAME", age: 23 },
				{ name: "NAME2", age: 33 },
				{ name: "NAME3", age: 43 }
			],
			showPersons: false
		};
	}
	tooglePerson = () => {
		const show = this.state.showPersons;
		this.setState({ showPersons: !show });
	};
	nameChange = e => {
		this.setState({
			persons: [
				{ name: "NAME", age: 23 },
				{ name: "NAME2", age: 33 },
				{ name: e.target.value, age: 43 }
			]
		});
	};

	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
					<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
					<Person
						nameChange={this.nameChange}
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}
					/>
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