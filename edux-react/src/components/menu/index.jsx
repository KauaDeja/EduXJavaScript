import React from 'react';
import logo from '../../assets/img/logo_branco_2-8.png';
import './index.css'
import { Nav, Navbar } from 'react-bootstrap';



const Menu = () => {
    return (
        <div id="myMenu">
        <Navbar collapseOnSelect expand="lg" variant= "dark">
            <img src={logo} style={{width: '100px'}} alt="Logo EduX" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Conquistas</Nav.Link>
                    <Nav.Link href="/">Objetivos</Nav.Link>
                    <Nav.Link href="/">TimeLine</Nav.Link>
                    <Nav.Link href="/">Dicas</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href= "/login">Login</Nav.Link>
                    <Nav.Link href= "/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )

    
}

export default Menu;
