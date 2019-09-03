import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import WithClass from "../../hoc/WithClass";
import "./person.css";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
  }

  // componentDidMount() {
  //   this.inputElementRef.current.focus();
  // }

  // componentDidMount() {
  // document.querySelector("input").focus()
  // this.inputElement.focus();
  // }

  render() {
    return (
      <Aux>
        {this.context.authenticated ? <p>authenticated</p> : <p>Log in</p>}
        {/* <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>authenticated</p> : <p>Log in</p>
          }
        </AuthContext.Consumer> */}
        <p onClick={this.props.deletePerson}>
          {this.props.name}, {this.props.age}
        </p>
        <input
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.nameChange}
        />
      </Aux>
    );
  }
}

Person.propType = {
  deletePerson: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChange: PropTypes.func
};

export default WithClass(Person, "Person");
