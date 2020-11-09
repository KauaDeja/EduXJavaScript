import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/img/logo_branco_2-8.png';
import './index.css'
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';



const Menu = () => {

    const history = useHistory();

    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-edux');

        history.push('/')
    }

    const renderMenu = () => {
        const token = localStorage.getItem('token-edux');

    


    if (token === null) {
        return (
            <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
            </Nav>
        );
    } else if (jwt_decode(token).role === 'Professor') {
        return (
            <Nav>
                <Nav.Link href="/professor/curso">Gerenciar Cursos</Nav.Link>
                <Nav.Link href="/professor/objetivoCRUD">Objetivos</Nav.Link>
                <Nav.Link href="/professor/turma">Gerenciar Turmas</Nav.Link>
                <Nav.Link href="/professor/categorias">Gerenciar Categorias</Nav.Link>
                <Nav.Link href="/professor/dashboard">DashBoard</Nav.Link>
                <Nav.Link href="/ranking">Ranking</Nav.Link>
                <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/professor/dashboard">Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    } else if (jwt_decode(token).role === 'Instituicao') {
        return (
            <Nav>
                <Nav.Link href="/instituicao/dashboard">Dashboard</Nav.Link>
                <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/instituicao/dashboard">Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    } else {
        return (
            <Nav>
                <Nav.Link href="/aluno/objetivo">Objetivos</Nav.Link>
                <Nav.Link href="/ranking">Ranking</Nav.Link>
                <Nav.Link href="/dica">Dicas</Nav.Link>
                <Nav.Link href="/aluno/dashboard">Dashboard</Nav.Link>
                <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/aluno/dashboard">Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }


}

return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
        <img src={logo} style={{ width: '100px' }} alt="Logo EduX" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            {renderMenu()}
        </Navbar.Collapse>
    </Navbar>
)


}

export default Menu;
