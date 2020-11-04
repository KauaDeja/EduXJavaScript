import './home.css'
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'; 
import Menu from '../../components/menu';
import Footer from '../../components/rodape';

//add imagens de crianças
import img_crianca from '../../assets/img/criança.jpg'
import img_crianca2 from '../../assets/img/03-1024x683.jpg'
import img_crianca3 from '../../assets/img/banner.jpg'
import img_crianca4 from '../../assets/img/banner 2.jpg'

//add imagens de professores
import img_professor from '../../assets/img/professor.jpg'
import img_professor2 from '../../assets/img/professora.jpg'
import img_professor3 from '../../assets/img/professores.jpeg'
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
    return(
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
    <h1 className="Sobre">Sobre o projeto</h1>
    
    <img className="sobre_img" src={img_crianca} alt=""/>
    
    <p className="texto">Dia a dia, os alunos da Escola Senai de Informática aprendem diversos conceitos e atingem vários objetivos com relação ao curso que estão fazendo. Uma grande dificuldade é mostrar para os alunos os objetivos(capacidades) que eles ainda devem alcançar.
</p>


      <div className="nos1">
  <AwesomeSlider className="Banner2">
    <div data-src={img_professor} />
    <div data-src={img_professor2} />
    <div data-src={img_professor3} />
  </AwesomeSlider>
  <div className="coluna">
        <h1>Quem somos</h1>
      <p className="texto1">Com o intuito de trazer uma experiência gamificada para os alunos, os docentes Diego e Paulo propuseram elaborar um projeto chamado EduX, que visa atender os 4 arquétipos de jogador, segundo Bartle,  para trazer maior imersão para os alunos e também fácil entendimento sobre o plano de curso de cada especialidade, assim como seus objetivos a serem alcançados.
</p>
      </div>
  </div>

      <Footer></Footer>
  </body>
  </div>
    )
}
export default Home