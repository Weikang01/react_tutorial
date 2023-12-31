import React, { useRef, useState } from 'react'
import store from '../../redux/store';
import { createAddAction, createSubAction } from '../../redux/count_action';

export default function Counter() {
  const numberSelector = useRef();
  const [_, setValue] = useState(0);

  store.subscribe(() => {
    setValue(store.getState());
  })

  const add = () => {
    store.dispatch(createAddAction(parseInt(numberSelector.current.value)));
  }

  const subtract =() => {
    store.dispatch(createAddAction(parseInt(numberSelector.current.value)));
  }

  const addIfOdd = () => {
    let result = parseInt(numberSelector.current.value) + store.getState();
    if (result & 1 !== 0) {
      store.dispatch(createSubAction(parseInt(numberSelector.current.value)));
    }
  }

  const asyncAdd = () => {
    setTimeout(() => {
      store.dispatch(createAddAction(parseInt(numberSelector.current.value)));
    }, 500);
  }

  return (
    <div>
      <div>Current value is: {store.getState()}</div>
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
