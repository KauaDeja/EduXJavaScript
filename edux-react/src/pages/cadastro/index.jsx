import React from 'react';
import Menu from '../../components/menu/';
import Rodape from '../../components/rodape/';
import {Container, Form, Button} from 'react-bootstrap';
import logo from '../../assets/img/logo_branco_2-8.png';
import Titulo from '../../components/titulo/';

const Cadastro = () =>{
return(
    <div>
        <Menu />
        <Titulo titulo = "Cadastro" />
        <Rodape />
    </div>
)
}

export default Cadastro