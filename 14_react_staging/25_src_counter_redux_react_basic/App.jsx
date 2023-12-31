import React, { Component } from 'react'
import Counter from './containers/Counter'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter store={store}/>
      </div>
    )
  }
}
