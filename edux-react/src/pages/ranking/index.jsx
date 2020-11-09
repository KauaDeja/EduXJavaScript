import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu/index';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import fundo from '../../assets/img/suprimentos-de-educacao-escolar-para-estudar-o-plano-de-fundo_24640-33860.jpg'
import { Form, Button, Table } from 'react-bootstrap';
import { url } from '../../utils/constants';
import './index.css'

const Ranking = () => {


    const [nome, setNome] = useState("");


    useEffect(() => {
        listar();
    }, [])

    const listar = (event) => {
        fetch(`${url}/ranking`)
            .then(response => response.json())
            .then(dados => {
                setNome(dados.data);
            })
            .catch(err => console.error(err));
    }

    return (

        <div>
            <Menu />
            <Titulo titulo="Classificação Geral" chamada={<h2>Colocação dos melhores alunos</h2>} />
            <div className="bgrank">

                <div className="container" >
                    <div className="imagemFundo">

                    </div>
                    <div className="row">

                        <div className="container">

                            <Form>
                                <Form.Group controlId="formRanking">
                                    <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Nome do Aluno"></Form.Control>
                                </Form.Group>
                                <Button variant='success' style={{ marginBottom: "30px" }} type="text">Buscar</Button>

                            </Form>
                        </div>
                    </div>

                    <div className="colt">

                        <Table border="1px" variant="dark" cellpadding="5px" cellspacing="0" ID="alter" striped bordered hover>
                            <thead>
                                <tr class="dif">
                                    <th>Posição</th>
                                    <th>Nome</th>
                                    <th>Nota</th>
                                    <th>Arquetipo</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1°</td>
                                    <td>Lucas</td>
                                    <td>100.00</td>
                                    <td>Predador</td>
                                    <td>06/11</td>
                                </tr>
                                <tr>
                                    <td>2°</td>
                                    <td>Makoto</td>
                                    <td>99.99</td>
                                    <td>Predador</td>
                                    <td>06/11</td>
                                </tr>
                                <tr>
                                    <td>3°</td>
                                    <td>Caua</td>
                                    <td>98.99</td>
                                    <td>Explorador</td>
                                    <td>06/11</td>
                                </tr>
                                <tr>
                                    <td>4°</td>
                                    <td>Gabriel</td>
                                    <td>98.97</td>
                                    <td>Explorador</td>
                                    <td>06/11</td>
                                </tr>
                                <tr>
                                    <td>5°</td>
                                    <td>Lucca</td>
                                    <td>96.99</td>
                                    <td>Explorador</td>
                                    <td>06/11</td>
                                </tr>
                                <tr>
                                    <td>6°</td>
                                    <td>Gustavo</td>
                                    <td>95.99</td>
                                    <td>Conquistador</td>
                                    <td>06/11</td>
                                </tr>
                                <tr>
                                    <td>7°</td>
                                    <td>Eduardo</td>
                                    <td>94.99</td>
                                    <td>Conquistador</td>
                                    <td>06/11</td>
                                </tr>
                                <tr>
                                    <td>8°</td>
                                    <td>Lucio</td>
                                    <td>93.99</td>
                                    <td>Conquistador</td>
                                    <td>06/11</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>


    )
}

export default Ranking;