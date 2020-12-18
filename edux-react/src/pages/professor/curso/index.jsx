import React, { useEffect, useState } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

import './index.css'
import { Form, Button, Container, Card, Row, FormLabel, Col, Table } from 'react-bootstrap';
import { url } from '../../../utils/constants';

const Curso = () => {
    const [id, setId] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [cursos, setCursos] = useState([]);
    const [instituicao, setInstituicao] = useState([]);

    useEffect(() => {
        listar();
    }, [])

    const listar = () => {
        fetch(`${url}/curso`)
            .then(response => response.json())
            .then(dados => {
                setCursos(dados.data);

                limparCampos();
            })
            .catch(err => console.error(err))
    }

    const salvar = (event) => {
        event.preventDefault()


        const curso = {
            titulo: titulo,
            idInstituicao: "090a64be-f705-4308-80b4-267c22d72548"

        }
        console.log(curso);

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/curso` : `${url}/curso/${id}`);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(curso),
            headers: {
                'content-type': 'application/json',

            }
        })
            .then(response => response.json)
            .then(dados => {
                alert('Seu curso foi salvo com sucesso!');

                limparCampos();
                listar();
            })
            .catch(err => console.error(err));

    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/curso/' + event.target.value, {
            method: 'GET',
            headers:{
                'content-type'  : 'application-json'
            }

        })

            .then(response => response.json())
            .then(dado => {
                setId(dado.idCurso);
                setTitulo(dado.titulo);

            })
            .catch(err => console.error(err));
        listar();

    }

    const remover = (event) => {
        event.preventDefault();
        console.log(url + '/curso/' + event.target.value);
        fetch(url + '/curso/' + event.target.value, {
            method: 'DELETE',

        })

            .then(response => response.json)
            .then(dados => {
                alert('Seu curso foi removido');
                
                listar();
            })

            .catch(err => console.error(err));
    }

    const limparCampos = () => {
        setId(0);
        setTitulo('');
        setInstituicao('');
    }


    return (
        <div className="bodygeral">
            <div className="body">
                <Menu />
                <Titulo titulo="Cursos" chamada={<h2>Gerencie os seus cursos</h2>} />
                <div className="bgCurso">
                    <Container>

                        <Card className="FormUI">
                            <Card.Body>
                                <Form onSubmit={event => salvar(event)}>
                                    <Form.Group controlId="formTitulo">
                                        <FormLabel>Titulo</FormLabel>
                                        <Form.Control type="text" placeholder="Digite o título do curso" value={titulo} onChange={event => setTitulo(event.target.value)} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="success" type="submit">Salvar</Button>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Table variant="dark" bordered className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Cursos</th>                                 
                                    <th scope="col">Instituição</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cursos.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.titulo}</td>
                                                <td>{item.idInstituicao}</td>
                                               

                                                <td>
                                                    <Button type='button' variant='warning' value={item.idCurso} onClick={event => editar(event)}>Editar</Button>
                                                    <Button type='button' variant='primary' value={item.idCurso} style={{ marginLeft: '35px' }} onClick={event => remover(event)}>Remover</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>

                    </Container>
                    <Container>
                        <h1 className="Sobre">Sobre os cursos</h1>
                        <Card>
                            <Row className="text-center">
                                <Col>
                                    <Card style={{ width: '18rem', height: '30em' }}>
                                        <Card.Img variant="top" src="https://www.sunsetweb.com.br/img/posts/postagens/20190129143724974/800/143724290120192577.jpg" />
                                        <Card.Body>
                                            <Card.Title>DEV</Card.Title>
                                            <Card.Text>
                                                Um DEV é uma pessoa que sabe como desenvolver software. Eles também são chamados de: Programadores.
                        </Card.Text>
                                            <Button variant="primary">Ler Mais</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem', height: '30em' }}>
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1620/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Redes</Card.Title>
                                            <Card.Text>
                                                O nosso Curso de Redes de Computador online é gratuito e conta com *Certificado opcional válido em todo ter
                            </Card.Text>
                                            <Button variant="primary">Ler Mais</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem', height: '30em' }}>
                                        <Card.Img variant="top" src="https://u2c7i2m7.stackpathcdn.com/wp-content/uploads/2015/09/franquias-educacao.jpg" />
                                        <Card.Body>
                                            <Card.Title>Multimidia</Card.Title>
                                            <Card.Text>
                                                Multimídia significa a integração de duas ou mais mídias ou formatos de comunicação.
                            </Card.Text>
                                            <Button variant="primary">Ler Mais</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </div>
            <Rodape />
        </div >

    )
}

export default Curso;