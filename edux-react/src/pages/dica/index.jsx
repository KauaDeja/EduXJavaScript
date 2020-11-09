import React, { useState, useEffect } from 'react';
import { Container, Form, Card, Button, Table } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import { url } from '../../utils/constants';


const Dica = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [dicas, setDicas] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {

        fetch(`${url}/dica`)
            .then(response => response.json())
            .then(dados => {
                console.log('retorno objetivo ' + dados)
                setDicas(dados);

                limparCampos();
            })
            .catch(err => console.error(err));
    }


    const Salvar = (event) => {
        event.preventDefault();

        const dicas = {
            texto: nome,
            urlImagem: urlImagem,
            idUsuario: "fb0586f8-8d1a-4560-93a9-2062fbc52d1a"
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/dica` : `${url}/dica/${id}`);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(dicas),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('sla o que colocar aqui');

                listar();

            })
            .catch(err => console.error(err))

    }

    const uploadFile = (event) => {
        event.preventDefault()

        console.log('TESTANDO');
        //crio o formulario para o envio do arquivo
        let formdata = new FormData();
        formdata.append('arquivo', event.target.files[0]);

        fetch(`${url}/upload`, {
            method: 'POST',
            body: formdata
        })
            .then(response => response.json())
            
            .then(dados => {
                console.log(dados.url);
                //setUrlImagem(data.url)
            })
            .catch(err => console.error(err))
    }
    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/dica/'+ event.target.value, {
            method: 'GET'
        })
            .then(response => response.json()) // ocorreu pego o response do json
            .then(dado => {
                setId(dado.id);
                setNome(dado.nome);
                setUrlImagem(dado.urlImagem);
            })
            }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/dica' + event.target.value,{
            method : 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Dica removida');

            listar();
        })
    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        setUrlImagem('');
    }
    return (
        <div>
            <Menu />
            <Container style={{ background : 'Purple'}} >
                <Titulo titulo="Dicas" chamada="Gerencie as dicas no campo abaixo." />
                <Card >
                    <Card.Body>
                        <Form onSubmit={event => Salvar(event)}>
                            <Form.Group controlId="FormNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="FormNome">
                                <Form.File id="filedica" label="Imagem da dica" onChange={event => uploadFile(event)} />
                                {urlImagem && <img src={urlImagem} style={{ width: '120px' }} />}
                            </Form.Group>
                            <Button type="submit">Salvar Dica</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dicas.map((item, index) =>{
                            return (
                                <tr key={index}>
                                    <td><img src={item.urlImagem} /></td>
                                    <td>{item.nome}</td>
                                    <td>
                                        <Button type="Button" variant="warning" value={item.id} onClick={event => editar(event)}>Editar</Button>
                                        <Button type="Button" variant="danger" value={item.id} style={{marginLeft : '30px'}}  onClick={event => remover(event)}>Remover</Button>

                                    </td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <Rodape />
        </div>
    )
}

export default Dica;