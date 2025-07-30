import React from "react";
import "./App.css";
import ClassCounter from "./components/state/ClassCounter";
import FunctionalCounter from "./components/state/FunctionalCounter";

const App = () => {
  return (
    <div className="main">
      <ClassCounter />
      <FunctionalCounter />
    </div>
  );
};

export default App;
