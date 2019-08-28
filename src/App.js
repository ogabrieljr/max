import React, { Component } from 'react'
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
       username:"NAME"
    }
  }
  
changeName = e => this.setState({username:e.target.value})

  render() {
    return (
      <div>
        <UserInput currentName={this.state.username} changeName={this.changeName}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    )
  }
}
