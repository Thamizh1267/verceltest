import React,{useState} from 'react';
import './style.css'

const UseState = () => {
    const [count, setCount] = useState(0);
    const IncrementCount = () => {
        setCount(count + 1);
    };

    const DecrementCount = () => {
        setCount(count - 1);
      };

      const Reset = () => {
        
           setCount(0);
      };

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button className='increment' onClick={IncrementCount}>Increment</button>
            <button className='decrement' onClick={DecrementCount}>Decrement</button>
            <button className='reset' onClick={Reset}>Reset</button>
        </div>

    );   
};

export default UseState;