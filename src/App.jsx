import React from "react";
import "./App.css";
import ClassCounter from "./components/state/ClassCounter";
import FunctionalCounter from "./components/state/FunctionalCounter";
import FunctionalCounterPrev02 from "./components/state/FunctionalCounterPrev02";

const App = () => {
  return (
    <div className="main">
      {/* <ClassCounter /> */}
      {/* <FunctionalCounter /> */}
      <FunctionalCounterPrev02 />
    </div>
  );
};

export default App;
