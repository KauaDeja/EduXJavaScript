import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

const DashBoard = () => {
    return(
        <div>
            <Menu/>
            <Titulo titulo="DashBoard" chamada={<h2>Gerencie os seus cursos</h2>} />
            <Rodape/>

        </div>
    )
}

export default DashBoard;

