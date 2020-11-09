  
import React from 'react'
import {Jumbotron} from 'react-bootstrap';
import './index.css';
import logo from '../../assets/img/Estudantes.jpg'

const Titulo = ({titulo, chamada}) => {

    return (
        <Jumbotron>
            <h1>{titulo}</h1>
            <p>
                {chamada}
            </p>
        </Jumbotron>
    )

}

export default Titulo;