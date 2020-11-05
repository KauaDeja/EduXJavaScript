import React, { useEffect, useState } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

import './index.css'
import { Form, Button, Container, Card, Row, FormLabel, Col, Table } from 'react-bootstrap';
import { url } from '../../../utils/constants';

const Curso = () => {

    const [id, setId] = useState(0);
    const [titulo,  setTitulo] = useState('');
    const [cursos,setCursos] = useState([]);
    const [data,setData] = useState([]);

    useEffect(() => {
        listar();
    }, [])


    // Aqui criamos a function salvar
    const salvar = (event) => {
        event.preventDefault();

        const curso = {
            titulo : titulo,
        }

        //if ternário para saber se vai fazer um post ou put
        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/cursos` :  `${url}/cursos/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(curso),
            headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Curso salva');

            listar();
        })
        .catch(err => console.error(err))
    }


    const listar = () => {

        fetch(`${url}/cursos`)
            .then(response => response.json())
            .then(dados => {
                setCursos(dados.data);
                
                limparCampos();
            })
            .catch(err => console.error(err));
    }
    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/cursos/' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.data.id);
            setTitulo(dado.data.titulo);
        })
    }




    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/cursos/' + event.target.value,{
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Curso removida');

            listar();
        })
    }

    const limparCampos = () => {
        setId(0);
        setTitulo('');

    }


    return (

        <div className="bodygeral">
            <div className="body">
                <Menu />
                <Titulo titulo="Cursos" chamada={<h2>Gerencie os seus cursos</h2>} />
                <Container>
                    
                    <Card>
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

                    <Table  bordered className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cursos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cursos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.titulo}</td>
                                        <td>
                                            <Button type="button" variant="warning" value={item.id} onClick={ event => editar(event)}>Editar</Button>
                                            <Button type="button" variant="danger" value={item.id} style={{ marginLeft : '30px'}} onClick={ event => remover(event)}>Remover</Button>
                                        </td>
                                    </tr>
                                )
                                })
                            }
                            
                        </tbody>
                    </Table>

                </Container>
            </div>
            <h1 className="Sobre">Sobre os cursos</h1>
            <Container className="bloco">
                <Card>
                    <Row className="text-center">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://miro.medium.com/max/1620/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg" />
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
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://2.bp.blogspot.com/-f8-avvJeBr0/VQ9jV7lHCeI/AAAAAAAAKWM/MfxTr4Kdjbs/s1600/01.png" />
                                <Card.Body>
                                    <Card.Title>Redes</Card.Title>
                                    <Card.Text>
                                    O nosso Curso de Redes de Computador online é gratuito e conta com *Certificado opcional válido em todo território nacional.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quaerat. Fuga ut facilis at, temporibus accusam.
                            </Card.Text>
                                    <Button variant="primary">Ler Mais</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.automacaoindustrial.info/wp-content/uploads/2013/05/curso-redes-de-computadores-e-nocoes-de-hardware.jpg" />
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
            <Rodape />
        </div >

    )
}

export default Curso;