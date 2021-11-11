import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Sellos from './components/Sellos';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//Browser Router
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

