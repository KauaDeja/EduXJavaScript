import React,{useEffect, useState} from 'react';
import {Carousel,Jumbotron,Button} from 'react-bootstrap'
import educacao1 from '../../../assets/img/educacao3.jpg'
import educacao2 from '../../../assets/img/educacao2.jpg'
import Menu from '../../../components/menu/';
import Rodape from '../../../components/rodape/';
import './index.css'


const ObjetivoCRUD = () =>{
   
    const [id, setId] = useState(0)
    const [descricao , setDescricao] = useState('');
    const [categoriaId , setCategoriaId] = useState(0);
    const [categorias , setCategorias] = useState([]);
    const [objetivo , setObjetivo] = useState([]);

    useEffect(() =>{
        listar()
        listarCategorias()
    },[] )
   
   
    const listarCategorias = () =>{
        fetch('https://localhost:5001/api/categoria')
        .then(response => response.json())
        .then(dados =>{
            setCategorias(dados);
        })

        .catch(err => console.error(err));
    }



    const listar = () =>{
        fetch('https://localhost:5001/api/objetivo')
        .then(response => response.json())
        .then(dados =>{
            setObjetivo(dados);
        })

        .catch(err => console.error(err));
    }

    const cadastrar = (event) => {
        event.preventDefault();

        const objetivo = {
            descricao: descricao,
            idCategoria: categoriaId 
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `https://localhost:5001/api/objetivo` : `https://localhost:5001/api/objetivo`);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(objetivo),
            headers: {
                'content-type': 'application/json',

            }
        })
            .then(response => response.json)
            .then(dados => {
                console.log('Seu objetivo foi salvo com sucesso!')

                listar();
            })
            .catch(err => console.error(err));

    }

    const editar = (event) => {
        event.preventDefault();

        fetch('https://localhost:5001/api/objetivo' + event.target.value, {
            method: 'GET',
            
        })

            .then(response => response.json())
            .then(dado => {
                setDescricao(dado.descricao);
                setCategorias(dado.categoria)
            })
            .catch(err => console.error(err));


        listar();
    }

    const remover = (event) => {
        event.preventDefault();

        fetch('https://localhost:5001/api/objetivo' + event.target.value, {
            method: 'DELETE',

        })

            .then(response => response.json)
            .then(dados => {
                alert('Seu objetivo foi removido');


                listar();
            })

            .catch(err => console.error(err));
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
              <div>
                     
                      <div className="bd-example" >
                          <form id="formObjetivo" onSubmit={event => cadastrar(event)}>
                              <div className="form-group">
                                  <label htmlFor="Descrição"></label>
                                  <textarea type="text" className="form-control" value={descricao} onChange={event => setDescricao(event.target.value)} id="descricao" aria-describedby="descricao" placeholder="Descreva o objetivo"/>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="Categoria"></label>
                                  
                                  <select type="select" className="form-control" custom value={categoriaId} onChange={event => setCategorias(event.target.value)} id="Categoria">
                                      <option value={0}>Selecione a Categoria</option>
                                      {
                                          
                                          categorias.map((item , index) => {
                                              return(
                                              <option key={index} value={item.idCategoria}>{item.tipo}</option>
                                              )
                                          })
                                      }
                                  </select> 
                              </div>
                              <button type="button" className="btn btn-secondary">Cancelar</button>
                              <button type="submit" className="btn btn-success" style={{marginLeft : '5px'}}>Salvar</button>
                          </form>
  
                          <table className="table" style={{marginTop : '40px'}}>
                              <thead>
                                  <tr>
                                      <th scope="col">Descrição</th>
                                      <th scope="col">Categoria</th>
                                      <th scope="col">Ações</th>
                                  </tr>
                              </thead>
                              <tbody>
                                {
                                    objetivo.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.descricao}</td>
                                                <td>{item.categoria}</td> 
                                                <td>
                                                    <Button type='button' variant='warning' value={item.id} onClick={event => editar(event)}>Editar</Button>
                                                    <Button type='button' variant='danger' value={item.idObjetivo} style={{ marginLeft: '35px' }} onClick={event => remover(event)}>Remover</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                     </tbody>
                          </table>
                      </div>
                  </div>
                  </Jumbotron>
                  <Rodape/>
              </div>
  
              
      )
}

export default ObjetivoCRUD