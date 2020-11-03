import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container, Form, Button} from 'react-bootstrap';
import './index.css'
import logo from '../../assets/img/logo_2.png';
import fundo from '../../assets/img/03-1024x683.jpg';


const Login = () => {
    return (
        <div>
            <Menu />
            <Container  className='form-height'>
            
                <Form className='form-signin'  >
                <img src={logo} style={{width: '300px'}} alt="Logo EduX" />
                    <div className='text-center'>
                    
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email"  placeholder="Informe o email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"  required/>
                    </Form.Group>
                    <Button variant="success" type="submit" >
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/cadastrar' style={{ marginTop :'30px'}}>Não tenho conta!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Login;