import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { analytics } from './firebase'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import rootReducer from './reducers/rootReducers'
import mySaga from './sagas/rootSaga'

analytics.logEvent('login', { name: 'loaded page' })
console.log(process.env.REACT_APP_VERCEL_TEST)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

sagaMiddleware.run(mySaga)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
