import './home.css'
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
    return(
  <div>
   <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={3000}
  >
    <div data-src="/images/banner.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AutoplaySlider>


  <body>
    <h1 className="Sobre">Sobre o projeto</h1>
    
    <p className="texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deserunt eveniet ullam esse ipsa doloremque reiciendis dicta iure quaerat voluptatum
       dolore nam neque delectus aut debitis voluptatibus, cumque numquam eum?</p>
  </body>


      <div className="nos">
      <h1>Quem somos nós</h1>

      </div>


  </div>
    )
}
export default Home