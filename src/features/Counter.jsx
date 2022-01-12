import React, { useState } from 'react'

function Counter() {
  const [incrementAmount, setIncrementAmount ] = useState(2);
  const [count, setCount] = useState(0);

  const incrementOne = () => {
    setCount(count + 1);
  }

  const decrementOne = () => {
    setCount(count - 1);
  }

  const incrementVariable = () => {
    setCount(count + incrementAmount);
  }

  return (
    <div className="app-wrapper">
      <h2 className="title">
        Counter App
      </h2>
      <div className="display">
        <div className="display-wrapper">
          <button onClick={incrementOne} className="counter-btn">+</button>
          <div className="display-value">
            { count }
          </div>
          <button onClick={decrementOne} className="counter-btn">-</button>
        </div>
      </div>

      <div className="add-section">
        <div className="add-section-wrapper">
          <div className="input-wrapper">
            <input
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
              type="number" />
          </div>
          <div onClick={incrementVariable} className="add-btn">
            Add Amount
          </div>
          <div className="add-btn">
            Add Async
          </div>
        </div>

      </div>
    </div>
  )
}

export default Counter
