import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';
import './index.css';
import { Container, Card } from 'react-bootstrap';


const Dashboard = () => {
    return (
        <div>

            <Menu />
            <Container>
                <div class="container">
                    <div class="row">
                    <div class="card">
                        </div>
                        <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                            <div class="well profile">
                                <div class="col-sm-12">
                                    <div class="col-xs-12col-sm-8">
                                        <figure class= "avatar">
                                            <img src="https://avatarfiles.alphacoders.com/126/126030.png" alt="Icone de um Avatar" class="img-circle img-responsive" id="imagem"/>
                                        </figure>
                                        <h2>Kaua Deja</h2>
                                        <p><strong>Sobre: </strong> 43 anos, brasileiro e Corinthiano</p>
                                        <p><strong>Hobbies: </strong> Gosto de ouvir Red Hot Chilli Peppers </p>
                                        <p><strong>Skills: </strong>
                                            <span class="tags">Backend</span>
                                            <span class="tags">Química</span>
                                            <span class="tags">Inglês</span>
                                            <span class="tags">Astronômo</span>
                                        </p>

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

export default Dashboard;

