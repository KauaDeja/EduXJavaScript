import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Curso from './pages/professor/curso';
import Turma from './pages/professor/turma';
import DashboardAluno from './pages/aluno/dashboard';
import Ranking from './pages/ranking';
import Dashboard from './pages/professor/dashboard';
import Instituicao from './pages/instituicao/dashboard';
import Objetivo from './pages/aluno/objetivo';
import ObjetivoCRUD from './pages/professor/objetivoCRUD';
import Categoria from './pages/professor/categoria';
import reportWebVitals from './reportWebVitals';
import jwt_decode from 'jwt-decode';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

const RotaPrivada = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      localStorage.getItem('token-edux') !== null ?
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

      <Route exact  path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/cadastrar' component={Cadastrar} />

      <RotaPrivada path='/ranking' component={Ranking} />
      <RotaPrivada path='/aluno/dashboard' component={DashboardAluno} />
      <RotaPrivada path='/aluno/objetivo' component={Objetivo} />

      <RotaPrivadaProfessor path='/professor/categorias' component={Categoria} />
      <RotaPrivadaProfessor path='/professor/objetivoCRUD' component={ObjetivoCRUD} />
      <RotaPrivadaProfessor path='/professor/dashboard' component={Dashboard} />
      <RotaPrivadaProfessor path='/professor/curso' component={Curso} />
      <RotaPrivadaProfessor path='/professor/turma' component={Turma} />

      <RotaPrivadaInstituicao path='/instituicao/dashboard' component={Instituicao} />
     
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
