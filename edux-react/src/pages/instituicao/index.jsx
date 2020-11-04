import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';

const Instituicao = () => {
    return(
        <div>
            <Menu/>
            <Titulo titulo="Instituições" chamada={<h2>Gerencie suas Instituições</h2>} />
            <Rodape/>

        </div>
    )
}

export default Instituicao;