import React,{useMemo, useCallback, useState} from 'react'

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const squaredValue = useMemo(() => {
    console.log('-------Calculating Squared Value');
    return count * count;
  },[count]);

  const Increment = useCallback (() => {
    setCount(previousCount => previousCount + 1);
  },[]);
  return (
    <div>
      <h1>UseMemo & UseCallback</h1>
      <h2>Counter : {count}</h2>
      <h3>Squared Value : {squaredValue}</h3>
      <button onClick={Increment}>Increment Value</button>
      
    </div>
  )
}

export default UseCallback;
