import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Turma = () => {

    const [id, setId] = useState(0);
    const[descricao, setDescricao] = useState('');
    const[idCurso, setIdCurso] = useState(0);

    const salvar = (event) => {
        event.preventDefault();

        const Turma = {
            descricao : descricao
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/turma` :  `${url}/turma/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(Turma),
            headers : {
                'content-type' : 'application/json',
            }
        })

        .then(response => response.json())
        .then(dados => {
            alert('Categoria salva com sucesso');

            listar();
        })
        .catch(err => console.error(err))
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/turma/' + event.target.value, {
            method : 'GET',
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.data.id);
            setDescricao(dado.data.descricao);
            setIdCurso(dado.data.idCurso);
        })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/turma/' + event.target.value,{
            method : 'DELETE',
        })
        .then(response => response.json())
        .then(dados => {
            alert('Categoria  com sucesso');

            listar();
        })
    }

    const limparCampos = () => {
        setId(0);
        setDescricao('');
        setIdCurso(0);
    }



    return (
        <div>
            <h1>Turma</h1>
            
            <Card>
                <Card.Body>
                <Form onSubmit={ event => salvar(event)}>
                <Form.Group controlId="formId">
                    <Form.Label>descrição</Form.Label>
                    <Form.Control type="text" value={name} onChange={event => setdescricao(event.target.value)} />
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
                                categorias.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.descricao}</td>
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
        </div>
    )
}

export default Turma;