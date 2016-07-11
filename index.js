import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import counter from './reducers/counter'
import Todos from './components/Todos'
import todos from './reducers/todos'
import { createStore } from 'redux'

const store = createStore(counter) // reducer counter bound to store

function render () {
	ReactDOM.render(
		<Todos />,
		document.querySelector('main')
	)
}

render()
store.subscribe(render)

