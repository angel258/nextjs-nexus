import React from 'react'
import { MyComponentProps } from './interfaces'

export const MyComponent: React.FC<MyComponentProps> = function ({
  name,
  index,
}) {
  // change code below this line

  const rend = Math.random()

  return (
    <div>
      remove comment and change code below this line
      <h2>Welcome to React! {rend}</h2> <br />
      <h3>Name: {name}</h3>
      <p>Be sure to close all tags!</p>
      <hr />
      remove comment and change code above this line
      {index < 3 ? <MyComponent name={name} index={index + 1} /> : null}
    </div>
  )

  // change code above this line
}
