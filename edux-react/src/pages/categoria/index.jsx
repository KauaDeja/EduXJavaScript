import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';

const Categoria = () => {
    return(
        <div>
            <Menu/>
            <Titulo titulo="Categorias" chamada={<h2>Gerencie suas Categorias</h2>} />
            <Rodape/>

        </div>
    )
}

export default Categoria;