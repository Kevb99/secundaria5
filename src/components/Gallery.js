import React from 'react';
import Slideshow from './Slideshow';
import { Main, Slide, TextoSlide } from '../styledcomponents/SlideshowItems';
import { Title } from '../styledcomponents/News'; 
import ex4k1 from '../images/4k1.jpg';
import ex4k2 from '../images/4k2.jpg';
import ex4k3 from '../images/4k3.jpg';
import ex4k4 from '../images/4k4.jpg';
 
const Gallery = () => {
	return (
		<Main>
			<Title>Galeria</Title>
			<Slideshow controles={true} autoplay={true} velocidad="1500" intervalo="5000">
				<Slide>
					<a href="#d">
						<img src={ex4k1} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Muestra de arte Harvard</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#d">
						<img src={ex4k2} alt=""/>
					</a>
					<TextoSlide>
						<p>Muestra de arte Harvard</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="#d">
						<img src={ex4k3} alt=""/>
					</a>
					<TextoSlide>
						<p>Muestra de arte Harvard</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="#ED">
						<img src={ex4k4} alt=""/>
					</a>
					<TextoSlide>
						<p>Muestra de arte Harvard</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</Main>
	);
}


 
export default Gallery;