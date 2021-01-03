import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {StateProvider} from './StateProvider'
import reducer, { initialState } from './reducer';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />

    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

