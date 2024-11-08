import React, { Component } from 'react';

class MyProps extends Component {
 render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        
      </div>
    )
  }
}

export default MyProps;
