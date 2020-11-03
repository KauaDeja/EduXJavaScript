import './home.css'
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'; 
import img_a from '../../assets/images/a.jpg';
import img_Banner from '../../assets/images/banner.png';
import Menu from '../../components/menu';
import Footer from '../../components/rodape';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
    return(
  <div>
    <Menu></Menu>
    <div className="Banner">

   <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={3500}
  >
    <div data-src={img_a} />
    <div data-src={img_Banner} />
    <div data-src="/path/to/image-2.jpg" />
  </AutoplaySlider>
    </div>

  <body>
    <h1 className="Sobre">Sobre o projeto</h1>
    
    <img className="sobre_img" src={img_a} alt=""/>
    
    <p className="texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deserunt eveniet ullam esse ipsa doloremque reiciendis dicta iure quaerat voluptatum
       dolore nam neque delectus aut debitis voluptatibus, cumque numquam eum?</p>
  </body>


      <div className="nos">
      <h1>Quem somos nós</h1>
      </div>

      <div className="imgquem">
      <div className="quem">
      <img className="img1" src={img_a} alt=""/>
      <img className="img1" src={img_a} alt=""/>
      <img className="img1" src={img_a} alt=""/>

      </div>
        
      </div>
      <p className="texto1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus accusantium temporibus earum et!
         Fuga natus est alias at saepe sit velit cum. Nemo dicta, deserunt omnis suscipit quae molestias quia.</p>

      <Footer></Footer>
  </div>
    )
}
export default Home