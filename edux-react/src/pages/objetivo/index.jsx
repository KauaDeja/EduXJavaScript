import React,{useState} from 'react';
import {Carousel,Jumbotron} from 'react-bootstrap'
import educacao1 from '../../assets/img/educacao3.jpg'
import educacao2 from '../../assets/img/educacao2.jpg'
import Menu from '../../components/menu/';
import Rodape from '../../components/rodape/';
import './index.css'


const Objetivo = () =>{
  
  const [aluno , setAluno] = useState('');
  const [turma , setTurma] = useState('');
  const [descricao , setDescricao] = useState('');
  const [categoria , setCategoria] = useState('');
  const [nota , setNota] = useState('');

  const Listar = () =>{
  
    fetch('https://localhost:44305/api/Objetivo', 'https://localhost:44305/api/ObjetivoAluno', {
        method : 'GET'
      })
      
  }
  
    return (
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
                        <h2>Visualize seus Objetivos</h2>
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
                        <h2>Visualize seus Objetivos</h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

            <Jumbotron style={{marginBottom:'0rem'}}>
            <div >
                   
                    <div className="bd-example" >
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

