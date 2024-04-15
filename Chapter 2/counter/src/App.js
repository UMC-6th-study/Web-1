import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  const add = () => {
    setCounter((current) => current + 1);
    console.log("increase 가 클릭됨");
  };
  const subtract = () => {
    console.log("decrease 가 클릭됨");
    setCounter((current) => current - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={add}>+1</button>
      <button onClick={subtract}>-1</button>
    </div>
  );
}

export default App;
