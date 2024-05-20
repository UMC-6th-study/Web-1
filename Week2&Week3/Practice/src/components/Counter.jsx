import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
  
    return (
    <div>
        {/* Practice1: Counter */}
        <h1>Practice1</h1>
        <h2>Counter</h2>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>
          <button onClick={() => console.log("Click the + button!")}>+</button>
          <button onClick={() => console.log("Click the - button!")}>-</button>
        </div>
      </div>
    )
  }

  export default Counter;