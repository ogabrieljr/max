import React, { Fragment, useRef, useEffect, useContext } from "react";
import Validation from "./Validation";
import Char from "./Char";
import AuthContext from "../../context/auth-context";

function Cockpit(props) {
  const toggleBtnRef = useRef(null);
const context = useContext(AuthContext)

console.log(context.authenticated)

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  // useEffect(() => {
  // 	console.log("effect")
  // }, [])

  // useEffect(() => {
  // 	// console.log("effect")
  // 	return () => {
  // 		console.log("cleanup")
  // 	}
  // },[props.username])

  const classes = [];
  const charList = props.username
    .split("")
    .map((character, index) => (
      <Char
        deleteCharacter={props.deleteCharacter}
        key={index}
        character={character}
      />
    ));
  if (props.usernameLength < 5) classes.push("red");
  if (props.usernameLength >= 5) classes.push("blue bold");
  return (
    <Fragment>
      <input onChange={props.usernameChange} value={props.username} />
      <p className={classes}>{props.username}</p>
      <Validation usernameLength={props.usernameLength} />
      {charList}
      <button ref={toggleBtnRef} onClick={() => props.helloToggle()}>
        Hello
      </button>
      {props.showHello ? <p>HELLO</p> : null}
      <button onClick={() => context.loginHandler()}>login</button>


      {/* <AuthContext.Consumer>
        {context => (
          <button onClick={() => context.loginHandler()}>login</button>
        )}
      </AuthContext.Consumer> */}
    </Fragment>
  );
}

export default React.memo(Cockpit);
