import React from 'react'

export default function UserInput(props) {
  const style = {
    border : "2px solid red"
  }
  return (
    <div>
      <input style={style} onChange={props.changeName} value={props.currentName} />
    </div>
  )
}
