import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [charArray, setCharArray] = useState([]);
 

  const handleClear = () => {
    setDisplay(0);
    setCharArray([]);
  };

  function handleToggleSign(char) {
    const newCharArray = (Number(charArray.join("")) * -1).toString();
    const negative= "I'm not working";
    //console.log(newCharArray);
  newCharArray.match(/\d/g) ? setCharArray(newCharArray) : setCharArray(negative)
  }
  const handleClick = (char) => {
    setDisplay(char);
    setCharArray([...charArray, char]);
  };
  const handleResult = () => {
    const result = charArray
      .join("")
      .split(/(\D)/g)
      .map((char) => (char.match(/\d/g) ? parseInt(char, 0) : char))
      .reduce((acc, char, i, arr) => {
        if (char === "+") {
          return (acc = acc + arr[i + 1]);
        } else if (char === "-") {
          return (acc = acc - arr[i + 1]);
        } else if (char === "×") {
          return (acc = acc * arr[i + 1]);
        } else if (char === "÷") {
          return (acc = acc / arr[i + 1]);
        } else if (char === "%") {
          return (acc = acc / 100);
        } else if (acc === ".") {
          return (acc = acc / 10);
        } else {
          return acc;
        }
      });
    setDisplay(result);
    setCharArray("");
  };
  return (
    <div className="App">
      <h1>Leila Calculator</h1>
      <div className="display">{display}</div>
      <div className="expression">{charArray}</div>
      <section className="panel">
        <section className="numbers">
          <button className="top-button" onClick={() => handleClear("AC")}>
            AC
          </button>
          <button
            className="top-button"
            onClick={() => handleToggleSign("+/-")}
          >
            +/-
          </button>
          <button className="top-button" onClick={() => handleClick("%")}>
            %
          </button>

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
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("×")}>×</button>
          <button onClick={() => handleClick("-")}>−</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
        </section>
      </section>
    </div>
  );
}

export default App;
