import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
// render(<Provider ><App/></Provider>, document.querySelector('#root'))

render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'))

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// //import rootReducer from './reducers'
// import App from './components/App'

// const store = createStore(rootReducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )