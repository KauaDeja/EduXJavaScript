import React, { useEffect, useState } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

import './index.css'
import { Form, Button, Container, Card, Row, FormLabel, Col, Table } from 'react-bootstrap';
import { url } from '../../../utils/constants';

//Feito by: Gabriel Maia dos Santos
const Turma = () => {
    const [id,  setId] = useState(0);
    const [descricao,  setDescricao] = useState('');
    const [Turma, setTurma] = useState([])
    const [curso, setCurso] = useState([]);
    const [idCurso, setIdCurso] = useState('');

    useEffect(() => {
        listar();
        listarCursos();
    }, [])

     const listarCursos = () => {
        fetch(url + '/curso')
            .then(response => response.json())
            .then(dados => {
                setCurso(dados.data);

                limparCampos();

                console.log(dados.data);
            })
            .catch(err => console.error(err));
        }  
        const Cadastrar = (event) => {
            event.preventDefault();
    
            const Turma = {
                descricao : descricao,
                idCurso : idCurso,
                curso : curso
            }
    
            let method = (id === 0 ? 'POST' : 'PUT');
            let urlRequest = (id === 0 ? `${url}/turma` : `${url}/turma/${id}`);
    
            fetch(urlRequest, {
                method: method,
                body: JSON.stringify(Turma),
                headers: {
                    'content-type': 'application/json',
    
                }
            })
                .then(response => response.json)
                .then(dados => {
                    alert('Sua Turma foi salva com sucesso!')
    
                    listar();
                })
                .catch(err => console.error(err));
    
        }
    const listar = () => {

        fetch(`${url}/turma`)
            .then(response => response.json())
            .then(dados => {
                setTurma(dados.data);
                
                limparCampos();
            })
            .catch(err => console.error(err));
    }


    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/turma/' + event.target.value, {
            method : 'GET',
            headers: {
                'content-type': 'application/json',

            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.id);
            setDescricao(dado.descricao);

        })
        listar();
    }




    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/Turma/' + event.target.value,{
            method : 'DELETE',
        })
        .then(response => response.json())
        .then(dados => {
            alert('Turma removida');

            listar();
        })
    }

    const limparCampos = () => {
        setDescricao('');
        setIdCurso(0);

    }
    

    return (
        
        <div className="bodygeral">
            <div className="body">
                <Menu />
                <Titulo titulo="Turma" chamada={<h2>Turmas registradas</h2>} />
                <div className="espaco">

            <div className="bg">
                <Container>
                    <div className="Fundo">

                    <Card>
                        <Card.Body>
                            <Form onSubmit={event => Cadastrar(event)}>
                                <Form.Group controlId="formTitulo">
                                    <FormLabel>Descrição</FormLabel>
                                    <Form.Control type="text" placeholder="Digite uma descrição nova" value={descricao} onChange={event => setDescricao(event.target.value)} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPerfil">
                        <Form.Label>Curso da Sala</Form.Label>
                        <Form.Control as="select" type="text" placeholder="Informe o tipo de curso" value={idCurso} onChange={event => setIdCurso(event.target.value)} >
                            {
                                curso.map((item, index) => {
                                    return(
                                        <option value={item.curso}>{item.titulo}</option>
                                    )
                                })
                            }
                        </Form.Control>            
                    </Form.Group>
                                <Button variant="success" type="submit">Salvar</Button>
                            </Form>
                        </Card.Body>
                    </Card>


                    <Card>
                    <Table  bordered className="table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Descrição</th>
                                <th scope="col">Curso</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Turma.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                        <td>{item.descricao}</td>
                                        <td>{item.curso}</td>
                                        <td>
                                            <Button type="button" variant="warning" value={item.idTurma} onClick={ event => editar(event)}>Editar</Button>
                                            <Button type="button" variant="danger" value={item.idTurma} style={{ marginLeft : '30px'}} onClick={ event => remover(event)}>Remover</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                            
                      
                    </Table>

                </Card>
                        </div>
                </Container>
                        </div>
                        </div>
            </div>

            <Rodape />
        </div >

    )
}

export default Turma;