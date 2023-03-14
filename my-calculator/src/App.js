import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [charArray, setCharArray] = useState([]);
  const handleClick = (char) => {
    setDisplay(char);
    setCharArray([...charArray, char]);
  };
 
  return (
    <div className="App">
      <h1>Leila Calculator</h1>
      <div>{display}</div>
      <div>{charArray}</div>
      <section className="panel">
        <section className="numbers">
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick(0)}>0</button>
        </section>
        <section className="operators">
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
        </section>
      </section>
    </div>
  );
}

export default App;
