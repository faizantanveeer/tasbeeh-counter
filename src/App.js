import React, { useState } from "react";
import "./App.css";

function App() {
  var [counter, setCounter] = useState(0);
  var [totalCount, setTotalCount] = useState(0);
  var [set, setSet] = useState(0);

  var countHandler = () => {
    totalCount = totalCount + 1;
    setTotalCount(totalCount);
    counter = counter + 1;
    setCounter(counter);
  };

  var resetHandler = () => {
    setCounter(0);
    setTotalCount(0);
    setSet(0);
  };

  const limit = 100;


  if (counter > limit) {
    setCounter(0);
    set = set + 1;
    setSet(set);
  }

  return (
    <div className="body">
      {/* Navbar */}

      <div className="bg-image"></div>
      <div className="container">
        <div className="wrapper">
          <h1 className="text pb-2">TASBEEH COUNTER</h1>
          <div className="container m-3">
            <h1 className="count">{counter}</h1>
            <p className="limit">/ {limit}</p>
          </div>
          <button onClick={countHandler} className="click-btn">
            Click Here
          </button>
          <button onClick={resetHandler} className="reset-btn">
            Reset
          </button>
          <p className="total"> Total Count: <span className="totalNumber">{totalCount}</span></p>
          <p className="sets">Sets: <span className="totalSets">{set}</span> </p>
        </div>
      </div>
    </div>
  );
}

export default App;
