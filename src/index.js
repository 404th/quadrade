import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/app/App'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <App />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
