import React, { PureComponent } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Person from "../Persons/Person";

export default class Persons extends PureComponent {
  
  // const rnd = Math.random();
  // if (rnd > 0.7) throw new Error("WRONG");

	render() {
		return this.props.persons.map(person => (
			<ErrorBoundary key={person.id}>
				<Person
					deletePerson={() => this.props.deletePerson(person.id)}
					nameChange={e => this.props.nameChange(e, person.id)}
					name={person.name}
					age={person.age}
					authenticated={this.props.authenticated}
				/>
			</ErrorBoundary>
		));
	}
}

