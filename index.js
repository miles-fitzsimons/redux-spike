import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import counter from './reducers/counter'
import { createStore } from 'redux'

const store = createStore(counter) // reducer counter bound to store

function render () {
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch({type: 'INCREMENT'})}
			onDecrement={() => store.dispatch({type: 'DECREMENT'})}

		/>,
		document.querySelector('main')
	)
}

render()
store.subscribe(render)

