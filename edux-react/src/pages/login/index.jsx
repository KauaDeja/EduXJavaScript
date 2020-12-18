import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import logo from '../../assets/img/logo_2.png';
import { useHistory } from "react-router-dom";

import jwt_decode from "jwt-decode";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/KauaDeja">
                Blue Screen
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://www.geledes.org.br/wp-content/uploads/2020/07/educacao8547.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const history = useHistory();
    //string email {get; set;}
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        //$"{email} - {senha}"
        // email + ' - ' + senha
        //this.state.email

        fetch('https://localhost:5001/api/login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }

            alert('Dados Inválidos');
        })
        .then(data => {
            localStorage.setItem('token-edux', data.token);

            let usuario = jwt_decode(data.token);

            console.log(usuario.role);
            if(usuario.role === 'Professor'){
                history.push('/professor/Dashboard');
            }else if(usuario.role === 'Instituicao'){
                history.push('/instituicao/dashboard');
            }else{
                history.push('/aluno/dashboard');
            }
        })
        .catch(err => console.error(err));
    }

    const classes = useStyles();

    return (

            <div>
                <Menu/>
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <img src={logo}  alt="Logo EduX" />
                           
                            <form className={classes.form} noValidate onSubmit={ event =>  logar(event)}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Endereço de email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={ event => setEmail(event.target.value)}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="senha"
                                    label="Senha"
                                    type="password"
                                    id="senha"
                                    autoComplete="current-password"
                                    value={senha}
                                    onChange={ event => setSenha(event.target.value)}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="lembre-me" color="primary" />}
                                    label="Lembre-me"
                                />
                                <Button
                                    
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                   Entrar
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="/cadastrar" variant="body2">
                                            Esqueceu a senha?
                                    </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/cadastrar" variant="body2">
                                            {"Não possui uma conta ainda? Cadastrar-se"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <Rodape/>
            </div>


    
    
  );
  
}

export default Login;