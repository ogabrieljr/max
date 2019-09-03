import React, { Component } from "react";
import "./App.css";
// import Radium from "radium";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";

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
      username: "",
      showCockpit: true,
      counter: 0,
      showHello: false,
      authenticated: false
    };
  }

  // static getDerivedStateFromProps(props, state) {
  // 	console.log(state)
  // 	return state
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  // 	console.log(nextState)
  // 	return true
  // }

  // componentDidUpdate(prevProps, prevState) {
  // 	console.log("cdu")
  // }

  // componentDidMount() {
  // 	("cdm")
  // }

  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    // this.setState({ persons, counter: this.state.counter + 1 });
    this.setState((prevState, props) => {
      return {
        persons,
        counter: prevState.counter + 1
      };
    });
  };

  deletePerson = id => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  loginHandler = () => this.setState({ authenticated: true });

  personsToggle = () => this.setState({ showPersons: !this.state.showPersons });

  cockpitToggle = () => this.setState({ showCockpit: !this.state.showCockpit });

  helloToggle = () => this.setState({ showHello: !this.state.showHello });

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
          authenticated={this.state.authenticated}
        />
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }
    return (
      <Aux>
        <button onClick={this.cockpitToggle}>button</button>
        <p>{this.props.title}</p>
        <button style={style} onClick={this.personsToggle}>
          button
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            loginHandler: this.loginHandler
          }}
        >
          <div>{persons}</div>
          {this.state.showCockpit ? (
            <Cockpit
              deleteCharacter={this.deleteCharacter}
              username={this.state.username}
              usernameChange={this.usernameChange}
              usernameLength={this.state.username.length}
              helloToggle={this.helloToggle}
              showHello={this.state.showHello}
            />
          ) : null}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, "App");
