import React from 'react';
import Menu from '../../components/menu/';
import Rodape from '../../components/rodape/';
import Titulo from '../../components/titulo/';

const Objetivo = () =>{
    return(
        <div>
            <Menu />
            <Titulo titulo ="Objetivos" chamada ={<h2> Atribua e gerencie os objetivos de seus alunos</h2>}/>
            <div className="container">
                   
                    <div className="bd-example" >
                        <form id="formObjetivo">
                           <div className="form-group">
                                <label htmlFor="Turma"></label>
                                <input type="text" className="form-control"  id="turma" aria-describedby="turma" placeholder="Informe a turma desejada"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Descrição"></label>
                                <input type="text" className="form-control"  id="descricao" aria-describedby="descricao" placeholder="Descreva o objetivo"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Categoria"></label>
                                <input type="text" className="form-control"  id="Categoria" 
                                 placeholder="Informe a categoria atráves de seu ID (Critico - Desejável - Oculto)"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nota"></label>
                                <input type="text" className="form-control small" id="nota" 
                                placeholder="Digite a nota atribuída ao aluno"/>
                            </div>
                            <button type="button" className="btn btn-secondary">Cancelar</button>
                            <button type="submit" className="btn btn-success" style={{marginLeft : '5px'}}>Salvar</button>
                        </form>

                        <table className="table" style={{marginTop : '40px'}}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Turma</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Nota</th>
                                    <th scope="col">Data Alcançada</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <Rodape/>
            </div>
            
    )
} 

export default Objetivo 

