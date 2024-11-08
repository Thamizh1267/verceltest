import React, { useState } from "react";

const Factorial = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateNumber = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const Calculate = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number");
    } else {
      const factorial = calculateNumber(num);
      setResult(factorial);
    }
  };

  return (
    <div>
      
        <h1>Factorial Calculator</h1>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter a number"/>
        <button onClick={Calculate}>Calculate Factorial</button>
        {result != null && (
          <h3>{result}</h3>
        )}
      
    </div>
  );
}

export default Factorial;
