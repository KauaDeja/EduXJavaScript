import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Curso from './pages/curso';
import Objetivo from './pages/objetivo'
import Cadastro from './pages/cadastro'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Objetivo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
