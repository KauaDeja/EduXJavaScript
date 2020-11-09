import React, { useState } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';
import './index.css';
import { Container, Card } from 'react-bootstrap';


const Instituicao = () => {

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
                                            <img src="https://seeklogo.com/images/E/escola-sabatina-logo-6FB11619CE-seeklogo.com.png" alt="Icone de um Avatar" class="img-circle img-responsive" id="imagem" />
                                        </figure>
                                        <h2>Escola ABC</h2>
                                        <p><strong>Sobre: </strong> Instituição escolar a mais de 20 anos</p>
                                        <p><strong>Professores: </strong>Somente professores mestrados</p>
                                        <p><strong>Skills: </strong>
                                            <span class="tags">Melhores notas na ONC e</span>
                                            <span class="tags">OBMEP</span>
                                        </p>

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

export default Instituicao;
