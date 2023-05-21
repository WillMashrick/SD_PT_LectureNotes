// import { useState } from 'react';
import "./Counter.css";
// We can use object destructuring for props! props.count === {count}
export default function SpicyCounter({ count, setCount }) {
  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Spicy Component</h1>
      <button onClick={countDown}>-</button>
      <span>{count}</span>
      <button onClick={countUp}>+</button>
    </div>
  );
}
