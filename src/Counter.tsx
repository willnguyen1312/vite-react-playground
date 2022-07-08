import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);
  const [counter3, setCounter3] = React.useState(0);
  console.log("Log me");
  
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          // setCounter(counter => counter + 10);
          // setCounter(counter => counter + 10);
          // setCounter(counter => counter + 10);
          setCounter(counter + 10);
          setCounter2(counter2 + 10);
          setCounter3(counter3 + 10);
        }}
      >
        Increment
      </button>
    </div>
  );
}
