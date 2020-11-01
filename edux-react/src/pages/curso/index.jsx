import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';

const Curso = () => {
    return(
        <div>
            <Menu/>
            <Titulo titulo="Cursos" chamada={<h2>Gerencie os seus cursos</h2>} />
            <Rodape/>

        </div>
    )
}

export default Curso;