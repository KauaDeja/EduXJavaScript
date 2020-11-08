import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import { Container, Form, Button, Card, Table, Row, Col } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { url } from '../../utils/constants';
import './index.css'


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Categoria = () => {

    const [id, setId] = useState(0);
    const [tipo, setTipo] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        listar();
    }, [])

    const listar = () => {
        fetch(`${url}/categoria`)
            .then(response => response.json())
            .then(dados => {
                setCategorias(dados);

                limparCampos();
            })
            .catch(err => console.error(err))
    }

    const cadastrar = (event) => {
        event.preventDefault();

        const categoria = {
            tipo: tipo
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/categoria` : `${url}/categoria/${id}`);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(categoria),
            headers: {
                'content-type': 'application/json',

            }
        })
            .then(response => response.json)
            .then(dados => {
                console.log('Sua categoria foi salva com sucesso!')

                listar();
            })
            .catch(err => console.error(err));

    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/categoria/' + event.target.value, {
            method: 'GET',
            headers:{
                'content-type'  : 'application-json'
            }

        })

            .then(response => response.json())
            .then(dado => {
                setId(dado.idCategoria);
                setTipo(dado.tipo);
            })
            .catch(err => console.error(err));


        listar();
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/categoria/' + event.target.value, {
            method: 'DELETE'

        })

            .then(response => response.json)
            .then(dados => {
                alert('Sua categoria foi removida');


                listar();
            })

            .catch(err => console.error(err));
    }

    const limparCampos = () => {
        setId(0);
        setTipo('');
    }
    return (
        <div>

            <Menu />
            <div className="bg">
                <div>
                    <Container>
                        <Titulo titulo="Categorias" chamada={<h2>Gerencie suas Categorias</h2>} />
                    </Container>
                    <AutoplaySlider style={{ width: '90%', marginLeft: '70px', height: '550px' }}
                        play={true}
                        cancelOnInteraction={false}
                        interval={3000}
                    >
                        <div data-src="https://static.escolakids.uol.com.br/2020/08/licoes-importantes-escola.jpg" />
                        <div data-src="https://educacao.estadao.com.br/blogs/blog-dos-colegios-salesiano-santa-teresinha/wp-content/uploads/sites/679/2018/04/educacaoinclusiva-1024x675.jpg" />
                        <div data-src="https://exame.com/wp-content/uploads/2020/05/gettyimages-1212171648.jpg" />
                    </AutoplaySlider>




                    <h2 className="text-center" style={{ marginTop : '50px', marginBottom : '50px', fontWeight : 'bolder', color : 'red' }}>Escreva suas categorias abaixo</h2>

                    <Card style={{ width: '70%', marginLeft: '200px', height: '170px' }} onSubmit={event => cadastrar(event)}>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Tipo de Categoria</Form.Label>
                                    <Form.Control type="Text" placeholder="Informe o tipo de categoria( Oculto, Desejavel ou Critico)" value={tipo} onChange={event => setTipo(event.target.value)} />
                                </Form.Group>
                                <Button type="submit" variant='primary'>Cadastrar</Button>

                            </Form>
                        </Card.Body>
                    </Card>

                    <h2 className="text-center" style={{ marginTop: '50px', marginBottom: '50px', fontWeight : 'bolder', color : 'red' }}>Lista de Categorias cadastradas</h2>


                    <Table bordered style={{ width: '70%', marginLeft: '200px', height: '170px' }} variant="dark">

                        <thead>
                            <tr>
                                <th>Tipos</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categorias.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.tipo}</td>
                                            <td>
                                                <Button type='button' variant='warning' value={item.idCategoria} onClick={event => editar(event)}>Editar</Button>
                                                <Button type='button' variant='danger' value={item.idCategoria} style={{ marginLeft: '35px' }} onClick={event => remover(event)}>Remover</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                    <Container>
                        <Row className="text-center" style={{marginTop : '200px'}}>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://miro.medium.com/max/2880/1*k8L6gJ54gnVKnsB-Z4xzLA.jpeg" />
                                    <Card.Body>
                                        <Card.Title>Oculto</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-correto-verde-108998257.jpg" />
                                    <Card.Body>
                                        <Card.Title>Desejável</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSienj0Su1UbeOclEYQbmhx7kGd242Spxapfg&usqp=CAU" />
                                    <Card.Body>
                                        <Card.Title>Crítico</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default Categoria 