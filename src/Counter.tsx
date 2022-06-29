import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          // setCounter(counter => counter + 10);
          // setCounter(counter => counter + 10);
          // setCounter(counter => counter + 10);
          setCounter(counter + 10);
          setCounter(counter + 10);
          setCounter(counter + 10);
        }}
      >
        Increment
      </button>
    </div>
  );
}
