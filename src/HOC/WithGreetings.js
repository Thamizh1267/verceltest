import React from 'react'

const WithGreetings = (WrappedComponent, Greeting) => {
  return class extends React.Component {
    render(){
        return(
            <div>
                <h1>{Greeting}</h1>
                <WrappedComponent {...this.props}/>
            </div>
        )
    }
  }
}

export default WithGreetings;
