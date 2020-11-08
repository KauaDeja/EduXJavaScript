import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Curso from './pages/curso';
import Objetivo from './pages/objetivo'
import ObjetivoCRUD from './pages/adm/objetivoCRUD'
import Cadastro from './pages/cadastro'
import reportWebVitals from './reportWebVitals';
import jwt_decode from 'jwt-decode';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

const RotaPrivada = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      localStorage.getItem('token-nyous-tarde') !== null ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);

const RotaPrivadaInstituicao = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      localStorage.getItem('token-edux') !== null  && jwt_decode(localStorage.getItem('token-edux')).role === 'Instituicao' ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);

const RotaPrivadaProfessor = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      localStorage.getItem('token-edux') !== null && jwt_decode(localStorage.getItem('token-edux')).role === 'Professor' ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);

const routing = (
  <Router>
    <Switch>
      <Route exact path= '/' component={Home} /> 
      <Route path='/login' component={Login} />
      <Route path='/cadastrar' component={Cadastrar} />

      <RotaPrivada path='/ranking' component={Ranking} />
      <RotaPrivada path= '/dica' component={Dica} />
      <RotaPrivada path= '/objetivo' component={Objetivo} />
      
      <RotaPrivadaProfessor path='/curso' component={Curso} />
      <RotaPrivadaProfessor path='/turma' component={Turma} />
      <RotaPrivadaProfessor path='/categoria' component={Categoria} />

      <RotaPrivadaInstituicao path='/instituicao/dashboard' component={Instituicao} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <ObjetivoCRUD />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
