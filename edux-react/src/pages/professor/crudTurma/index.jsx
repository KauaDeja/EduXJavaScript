import React, { useEffect, useState } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

import { Form, Button, Container, Card, Row, FormLabel, Col, Table } from 'react-bootstrap';
import { url } from '../../../utils/constants';

const Turma = () => {

    const [id, setId] = useState(0);
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        listar();
    }, [])

    const listar = () => {

        fetch(`${url}/cursos`)
            .then(response => response.json())
            .then(dados => {
                setDescricao(dados.data);
                
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const salvar = (event) => {
        event.preventDefault();

        const Turma = {
            descricao: descricao
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

            .then(response => response.json())
            .then(dados => {
                alert('Turma salva com sucesso');

                listar();
            })
            .catch(err => console.error(err))
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/turma/' + event.target.value, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dado => {
                setId(dado.data.id);
                setDescricao(dado.data.descricao);
            })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/turma/' + event.target.value, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(dados => {
                alert('Turma  com sucesso');

                listar();
            })
    }

    const limparCampos = () => {
        setId(0);
        setDescricao('');
    }



    return (
        <div>
            <Menu />
            <h1>Turma</h1>

            <Card>
                <Card.Body>
                    <Form onSubmit={event => salvar(event)}>
                        <Form.Group controlId="formId">
                            <Form.Label>descrição</Form.Label>
                            <Form.Control type="text" value={descricao} onChange={event => setDescricao(event.target.value)} />
                        </Form.Group>
                    </Form>

                    <Button type="subimit">Salvar</Button>

                </Card.Body>
            </Card>

            <Table bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        descricao.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.descricao}</td>
                                    <td>
                                        <Button type="button" variant="warning" value={item.id} onClick={event => editar(event)}>Editar</Button>
                                        <Button type="button" variant="danger" value={item.id} style={{ marginLeft: '30px' }} onClick={event => remover(event)}>Remover</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Rodape/>
        </div>
    )
}

export default Turma;