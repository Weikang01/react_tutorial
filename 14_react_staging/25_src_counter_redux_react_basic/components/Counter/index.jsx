import React, { useRef } from 'react'

export default function Counter(props) {

  const {count, addFunc, subFunc, asyncAddFunc} = props;

  const numberSelector = useRef();

  const add = () => {
    const value = parseInt(numberSelector.current.value);
    addFunc(value);
  }

  const subtract =() => {
    const value = parseInt(numberSelector.current.value);
    subFunc(value);
  }

  const addIfOdd = () => {
    const value = parseInt(numberSelector.current.value);
    if (value & 1 !== 0) {
      addFunc(value);
    }
  }

  const asyncAdd = () => {
    const value = parseInt(numberSelector.current.value);
    asyncAddFunc(value, 500);
  }

  return (
    <div>
      <div>Current value is: {count}</div>
      <select ref={numberSelector}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={addIfOdd}>add if sum is odd</button>
      <button onClick={asyncAdd}>async add</button>
    </div>
  )
}
