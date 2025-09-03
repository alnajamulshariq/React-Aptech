import React from 'react';
import Second from './Second';

function First() {
  const MyFun = (name) => {
    alert(`Hello from First Component ${name}`);
  };

  return (
    <div>
      First
      <Second name={MyFun} />
    </div>
  );
}

export default First;
