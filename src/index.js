import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers'

const ourStore = applyMiddleware()( createStore )

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={ ourStore( Reducers ) } >
        <Router>
          <App />
        </Router>
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
