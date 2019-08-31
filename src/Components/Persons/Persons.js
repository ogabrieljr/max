import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Person from "../Persons/Person";

export default function Persons(props) {
	return props.persons.map(person => (
		<ErrorBoundary key={person.id}>
			<Person
				deletePerson={() => props.deletePerson(person.id)}
				nameChange={e => props.nameChange(e, person.id)}
				name={person.name}
				age={person.age}
			/>
		</ErrorBoundary>
	));
}
