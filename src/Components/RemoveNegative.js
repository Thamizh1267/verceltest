import React from 'react';

const RemoveNegative = () => {
  const n = [4, -5, -3, 7, -8, 2, 1];

  const removeNegatives = (arr) => {
    return arr.filter(num => num >= 0);
  };

  const positiveNumbers = removeNegatives(n);

  return (
    <div>
      <h1>Positive Numbers:</h1>
      <ul>
        {positiveNumbers.map((num, index) => (
          <ol key={index}>{num}</ol>
        ))}
      </ul>
    </div>
  );
};

export default RemoveNegative;
