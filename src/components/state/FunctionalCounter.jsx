import { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>FunctionalComponent</h4>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default FunctionalCounter;
