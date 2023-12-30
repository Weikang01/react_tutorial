import React, { useRef, useState } from 'react'

export default function Counter() {
  const numberSelector = useRef();
  const [cur_value, setValue] = useState(0);

  const add = () => {
    setValue(parseInt(numberSelector.current.value) + cur_value);
  }

  const subtract =() => {
    setValue(parseInt(numberSelector.current.value) - cur_value);
  }

  const addIfOdd = () => {
    let result = parseInt(numberSelector.current.value) + cur_value;
    if (result & 1 !== 0) {
      setValue(result);
    }
  }

  const asyncAdd = () => {
    setTimeout(() => {
      setValue(parseInt(numberSelector.current.value) + cur_value);
    }, 500);
  }

  return (
    <div>
      <div>Current value is: {cur_value}</div>
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
