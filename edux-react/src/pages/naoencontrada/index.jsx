import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import logo from '../../assets/img/Erro.jpg';

const NaoEncontrada = () => {
    return (
        <div>
            <Menu/>
            <Container style={{ marginBottom : '100px'}} >
            <h1 style={{ marginLeft : '450px'}}>Erro 404.</h1>
            <h2 style={{ marginLeft : '360px'}}>Página não encontrada :(</h2>
            <p style={{ marginLeft : '260px'}}>O link usado pode não existir ou ter sido removido.Por favor, volte e tente novamente.</p>
            <img src={logo} alt="Imagem de erro"/>
            </Container>
            <Rodape/>
        </div>
    )
}

export default NaoEncontrada;