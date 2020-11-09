import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';

import { Form, Button, Card, Table } from 'react-bootstrap';
import { url } from '../../utils/constants';


const AlunoTurma = () => {

    const [id, setId] = useState(0);
    const [matricula, setMatricula] = useState([]);

    useEffect(() => {
        listar();
    }, [])

    const listar = () => {

        fetch(`${url}/aluno`)
            .then(response => response.json())
            .then(dados => {
                setMatricula(dados.data);

                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const salvar = (event) => {
        event.preventDefault();

        const AlunoTurma = {
            matricula: matricula
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/aluno` : `${url}/aluno/${id}`);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(AlunoTurma),
            headers: {
                'content-type': 'application/json',
            }
        })

            .then(response => response.json())
            .then(dados => {
                alert('Aluno salvo com sucesso');

                listar();
            })
            .catch(err => console.error(err))
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/aluno/' + event.target.value, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dado => {
                setId(dado.data.id);
                setMatricula(dado.data.matricula);
            })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/aluno/' + event.target.value, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(dados => {
                alert('Aluno removido  com sucesso');

                listar();
            })
    }

    const limparCampos = () => {
        setId(0);
        setMatricula(0);
    }



    return (
        <div>
            <Menu />
            <h1>Aluno</h1>

            <Card>
                <Card.Body>
                    <Form onSubmit={event => salvar(event)}>
                        <Form.Group controlId="formId">
                            <Form.Label>matricula</Form.Label>
                            <Form.Control type="text" value={matricula} onChange={event => setMatricula(event.target.value)} />
                        </Form.Group>
                    </Form>

                    <Button type="subimit">Salvar</Button>

                </Card.Body>
            </Card>

            <Table bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>matricula</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matricula.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.matricula}</td>
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

export default AlunoTurma;