import React ,{useReducer} from 'react'
import Deadpool from './Deadpool.jpg'

function reducer_count(state,action){
    if(action.type === 'Increment_age' ){
        return{
            age:state.age +1
        }
    }else{
        throw new Error ('Unknown Action')
    }
}

function UseReducerHook() {
    const [state,dispatch] = useReducer(reducer_count,{age:28});
  return (
    <>
    <h1>UseReducer Hook</h1>
    <button onClick={() =>dispatch({type:'Increment_age'})}>Increment Age</button>
    <p>Hello Your Age Is : {state.age}</p>
    <img src={Deadpool}/>
    </>
  )
}

export default UseReducerHook;
