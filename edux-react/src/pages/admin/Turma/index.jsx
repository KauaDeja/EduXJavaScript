import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Turma = () => {

    const [id, setId] = useState(0);
    const[descricao, setdescricao] = useState('');
    const[idCurso, setIdCurso] = useState(0);

    const salvar = (event) => {
        event.preventDefault();
        console.log(`${descricao}`)
    }

    return (
        <div>
            <h1>Turma</h1>
            
            <Card>
                <Card.Body>
                <Form onSubmit={ event => salvar(event)}>
                <Form.Group controlId="formId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" value={name} onChange={event => setdescricao(event.target.value)} />
                    </Form.Group>
            </Form>

            <Button type="text">Salvar</Button>

            </Card.Body>
            </Card>
        </div>
    )
}

export default Turma;