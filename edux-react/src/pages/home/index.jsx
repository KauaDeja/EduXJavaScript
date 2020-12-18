import './home.css'
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/rodape';
import { Carousel, Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';

//add imagens de crianças
import img_crianca from '../../assets/img/criança.jpg'
import img_crianca2 from '../../assets/img/03-1024x683.jpg'
import img_crianca3 from '../../assets/img/banner.jpg'
import img_crianca4 from '../../assets/img/banner 2.jpg'

//add imagens de professores
import img_kaua from '../../assets/img/KAUA.jpg'
import img_fusca from '../../assets/img/fusca.jpg'
import img_maia from '../../assets/img/maia.jpg'
import img_benjamin from '../../assets/img/benjamin.jpg'
import img_lucca from '../../assets/img/lucca.jpg'
import logo from '../../assets/img/logo.png'


//Feito by: Gabriel Maia dos Santos
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  return (
    <div>
      <Menu></Menu>
      <div className="Banner">

        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={4500}
        >
          <div data-src={img_crianca2} />
          <div data-src={img_crianca3} />
          <div data-src={img_crianca4} />
        </AutoplaySlider>
      </div>

      <body>
     
        <div className="div2">
          <Jumbotron className="text-center">
            <h1>Plataforma Gamificada Educacional</h1>
            <p>
              Encontre modelos mais educativos e divertidos para melhorar seu aprendizado
            </p>
            <p>
              <Button variant='primary' href='/login'>Login</Button><Button variant="success" href='/cadastrar' style={{ marginLeft: '40px' }}>Cadastrar</Button>
            </p>
          </Jumbotron>
        </div>
        <div className='div3'>
          <h1 style={{ color: 'black', justifyContent: 'center', textAlign: 'center', fontSize: 50 }}>Sobre o projeto</h1>
          <img className="sobre_img" src={img_crianca} alt="" />

          <p className="texto" style={{}}>Dia a dia, os alunos da Escola Senai de Informática aprendem diversos conceitos e atingem vários objetivos com relação ao curso que estão fazendo. Uma grande dificuldade é mostrar para os alunos os objetivos(capacidades) que eles ainda devem alcançar.
</p>
        </div>


        <div className="nos1">
          <AwesomeSlider className="Banner2">
            <div data-src={img_maia} />
            <div data-src={img_kaua} />
            <div data-src={img_fusca} />
            <div data-src={img_benjamin} />
            <div data-src={img_lucca} />
          </AwesomeSlider>
          <div className="coluna">
            <h1 style={{color: 'black'}}>Quem somos</h1>
            <p className="texto1" style={{color:'black'}}>Com o intuito de trazer uma experiência gamificada para os alunos, os docentes Diego e Paulo propuseram elaborar um projeto chamado EduX, que visa atender os 4 arquétipos de jogador, segundo Bartle,  para trazer maior imersão para os alunos e também fácil entendimento sobre o plano de curso de cada especialidade, assim como seus objetivos a serem alcançados.
</p>


          </div>
        </div>
        <img className="logo" src={logo} alt="Logo blue Screen" />
          <Footer></Footer>

      </body>
    </div>
  )
}
export default Home;