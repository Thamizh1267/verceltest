import React from 'react'

const Hello = ({name}) => {
    console.log("Hello Component Rendered", name)
  return (
    <div>
      <h3>Hello : {name}</h3>
    </div>
  )
}

export default Hello;
