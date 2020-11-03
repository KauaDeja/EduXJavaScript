import React from 'react';
import {Carousel,Jumbotron} from 'react-bootstrap'
import educacao1 from '../../assets/img/educacao3.jpg'
import educacao2 from '../../assets/img/educacao2.jpg'
import Menu from '../../components/menu/';
import Rodape from '../../components/rodape/';
import './index.css'

const Objetivo = () =>{

    fetch('https://localhost:44305/api/Objetivo , https://localhost:44305/api/ObjetivoAluno',{
        method:'POST'

    })
    return(
        <div >
            <Menu />
            <div id="Carrossel">
            <Carousel>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={educacao1}
                    alt='first-slide'
                    />
                    <Carousel.Caption>
                        <div className='text'>
                        <h1>Objetivos</h1>
                        <h2>Visualize, gerencie ou atribua Objetivos</h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={educacao2}
                    alt='second-slide'
                    />
                    <Carousel.Caption>
                        <div className='text'>
                        <h1>Objetivos</h1>
                        <h2>Visualize, gerencie ou atribua Objetivos</h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

            <Jumbotron style={{marginBottom:'0rem'}}>
            <div className="container">
                   
                    <div className="bd-example" >
                        <form id="formObjetivo">
                        <div className="form-group">
                                <label htmlFor="Aluno"></label>
                                <input type="text" className="form-control"  id="aluno" aria-describedby="Aluno" placeholder="Digite o nome do aluno"/>
                        </div>
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
                                    <th scope="col">Aluno</th>
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
                </Jumbotron>
                <Rodape/>
            </div>

            
    )
} 

export default Objetivo 

