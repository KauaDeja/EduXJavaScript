import React from 'react';
import logo from '../../assets/img/logo_branco_2-8.png';
import { Nav, Navbar, Button } from 'react-bootstrap';
import './index.css'

const Rodape = () => {
    return (

        <div>

            <footer id="myFooter">
                <div class="container">
                    <div class="row">
                        <img src={logo} style={{ marginRight: '50px' }} alt="Logo EduX" />
                        <div class="col-sm-2">
                            <h5>Inicio</h5>
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Conquistas</a></li>
                                <li><a>Objetivos</a></li>
                                <li><a>TimeLine</a></li>
                                <li><a>Dicas</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Sobre-nós</h5>
                            <ul className="col-sm-21">
                                <li class="equipe"><a>Blue Screen</a></li>
                                <li><a >DEV Web</a></li>
                                <li><a>Empresa</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Suporte</h5>
                            <ul>
                                <li><a >Email</a></li>
                                <li><a >Telefone</a></li>
                                <li><a>Whatsapp</a></li>
                            </ul>
                        </div>
                        <div className="button1"> <Button href= "https://github.com/KauaDeja" variant="dark" type="submit">Contato</Button></div>

                    </div>
                </div>
                <div class="footer-copyright">
                    <div className="equipe">
                        <h1>Blue Screen</h1>
                    </div>
                    <small>Desenvolvido por <a href="https://github.com/KauaDeja">Kaua Deja, Lucca Gomes, Gabriel Maia, Gabriel Bejamin e Matheus Fuscaldi</a></small>
                </div>
            </footer>

        </div>

    )
}

export default Rodape;