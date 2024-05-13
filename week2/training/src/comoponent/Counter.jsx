import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    console.log("increase가 클릭됨");
  };

  const decrease = () => {
    setCount(count - 1);
    console.log("decrease가 클릭됨");
  };
  return (
    <div>
      <h2 id="number">{count}</h2>
      <button id="increase" onClick={increase}>
        +1
      </button>
      <button id="decrease" onClick={decrease}>
        -1
      </button>
    </div>
  );
}
