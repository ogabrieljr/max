import React, { useState } from "react";
import Person from "./Person/Person";

export default function App() {
	const [person, setPerson] = useState({
		persons: [
			{ name: "NAME", age: 10 },
			{ name: "NAME2", age: 20 },
			{ name: "NAME3", age: 30 }
		]
	});

	const [otherState] = useState("other state");

	console.log(person, otherState);

	const switchName = () => {
		setPerson({
			persons: [
				{ name: "NAME4", age: 40 },
				{ name: "NAME5", age: 50 },
				{ name: "NAME6", age: 60 }
			]
		});
	};
	return (
		<div>
			<button onClick={switchName}>btn</button>
			<Person name={person.persons[0].name} age={person.persons[0].age}></Person>
			<Person name={person.persons[1].name} age={person.persons[1].age}></Person>
			<Person name={person.persons[2].name} age={person.persons[2].age}>
				Children
			</Person>
		</div>
	);
}

// import React, { Component } from "react";
// export default class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		};
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
// 					btn
// 				</button>
// 				{this.state.count}
// 			</div>
// 		);
// 	}
// }
// import React, { useState } from "react";
// export default function App() {
// 	const [count, setCount] = useState(0);
// 	return (
// 		<div>
// 			<button onClick={() => setCount(count + 1)}>btn</button>
// 			{count}
// 		</div>
// 	);
// }
