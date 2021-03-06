import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducers from './store/reducers'

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
