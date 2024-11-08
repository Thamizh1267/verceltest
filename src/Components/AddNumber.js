import React, { useState } from 'react';

const AddNumber = () => {
 
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');

  
  const [result, setResult] = useState(null);

 
  const handleResult = () => {
    const sum = Number(num1) + Number(num2) + Number(num3) + Number(num4);
    setResult(sum);
  };

  return (
    <div>
      <h2>Add Four Numbers</h2>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Enter first number" 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Enter second number" 
      />
      <input 
        type="number" 
        value={num3} 
        onChange={(e) => setNum3(e.target.value)} 
        placeholder="Enter third number" 
      />
      <input 
        type="number" 
        value={num4} 
        onChange={(e) => setNum4(e.target.value)} 
        placeholder="Enter fourth number" 
      /><br/>
      <button onClick={handleResult}>Add Numbers</button>
      {result !== null && (
        <h3>The sum is: {result}</h3>
      )}
    </div>
  );
};

export default AddNumber;
