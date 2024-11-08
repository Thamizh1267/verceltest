import React, { Component } from 'react'

class StateManage extends Component {
    constructor(){
        super();
        this.state = {message : 'This is my state component.'}
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>  
      </div>
    )
  }
}

export default StateManage;
