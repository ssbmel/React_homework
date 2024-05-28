import { Fragment, useState } from 'react';
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount(count + 1);
  }

  const minusCountHandler = () => {
    setCount(count - 1);
  }

  const resetCountHandler = () => {
    setCount(0);
  }
  return (
    <Fragment>
      <div className="container">
        <div className="count">{count}</div>
        <button className="btn" onClick={addCountHandler}>+</button>
        <button className="btn" onClick={minusCountHandler}>-</button>
        <button className="btn" style={{width: "150px"}} onClick={resetCountHandler}>reset</button>
      </div>
    </Fragment>
  );
} 

export default App
