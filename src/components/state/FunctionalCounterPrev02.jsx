import React, { useState } from "react";

/**
 * FunctionalCounterPrev02
 * ------------------------
 * This component demonstrates state updates in React using useState,
 * especially focusing on how updates behave differently when:
 *   1. You use the current state variable directly (e.g., setCount(count + 1))
 *   2. You use the functional form to access the previous state (e.g., setCount(prev => prev + 1))
 */

const FunctionalCounterPrev02 = () => {
  const initialValue = 0;

  // Initialize count state with initialValue (0)
  const [count, setCount] = useState(initialValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //   setCount(count + 1); // leads to incorrect value due to stale closure

      setCount((prevValue) => prevValue + 1); // use functional form to ensure each increment gets the latest value
    }
  };

  return (
    <div>
      <h4>FunctionalCounterPrev02</h4>

      <div>Count {count}</div>

      <button onClick={() => setCount(initialValue)}>Reset</button>

      {/* 
        ❌ setCount(count + 1): may cause stale state issues if called multiple times in a loop
        ✅ setCount(prev => prev + 1): safe in all cases, even in loops or async updates 
      */}
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Increment
      </button>

      <button onClick={() => setCount((prevValue) => prevValue - 1)}>
        Decrement
      </button>

      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default FunctionalCounterPrev02;
