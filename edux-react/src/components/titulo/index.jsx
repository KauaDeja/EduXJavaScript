  
import React from 'react'
import {Jumbotron} from 'react-bootstrap';
import './index.css';

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