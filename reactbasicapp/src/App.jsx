import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("VAlue is increased", counter);
  };
  return (
    <>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add </button>
      <button onClick={removeValue}>subtract</button>
    </>
  );
}

export default App;
