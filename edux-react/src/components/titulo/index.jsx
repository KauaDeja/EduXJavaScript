
import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import './index.css';

const Titulo = ({ titulo, chamada }) => {

    return (
        <Jumbotron>
            <div className="menuTitulo">
                <h1>{titulo}</h1>
                <p>
                    {chamada}
                </p>
            </div>
        </Jumbotron>
        
    )

}

export default Titulo;