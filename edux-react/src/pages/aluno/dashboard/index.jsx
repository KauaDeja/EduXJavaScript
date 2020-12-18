import React, { useState, useEffect } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';
import './index.css';
import { Container, Card } from 'react-bootstrap';
import {url} from '../../../utils/constants';
import jwt_decode from "jwt-decode";


const DashboardAluno = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');

    useEffect(() => {
        listarUsuarioLogado()
    }, []);

    const listarUsuarioLogado = () => {
        fetch(url + '/usuario')
            .then(response => response.json())
            .then(dados => {
                localStorage.getItem('token-edux');
                let token = localStorage.getItem('token-edux');
                let NomeUsuarioLogado = jwt_decode(token).nameid;
                let EmailUsuarioLogado = jwt_decode(token).email;

                
                setNomeUsuario(NomeUsuarioLogado);
                setEmailUsuario(EmailUsuarioLogado);
                console.log(NomeUsuarioLogado);
            })
            .catch(err => console.error(err));
        }

    return (
        <div>

            <Menu />
            <Container>
                <div className="bgDashboard">
                    <div class="container">
                        <div class="row">
                            <div class="card">
                            </div>
                            <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                                <div class="well profile">
                                    <div class="col-sm-12">
                                        <div class="col-xs-12col-sm-8">
                                            <figure class="avatar">
                                                <img src="https://avatarfiles.alphacoders.com/184/184671.jpg" alt="Avatar" class="img-circle img-responsive" id="imagem" />
                                            </figure>

                                                <h1>{nomeUsuario}</h1>
                                                <h4 className='emailDashBoard'>Email: {emailUsuario}</h4>
                                            <p><strong>Sobre: </strong> 15 anos, Estudante de humanas</p>
                                            <p><strong>Hobbies: </strong> Jogar futebol </p>
                                            <p><strong>Skills: </strong>
                                                <span class="tags">Dançar</span>
                                                <span class="tags">Altruísta</span>
                                                <span class="tags">Ingles</span>
                                                <span class="tags">Astronômo</span>
                                            </p>
                                            <h4>Turma: 1° Ano A</h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Rodape />
        </div>
    )
}

export default DashboardAluno;

