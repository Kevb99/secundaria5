import React from 'react';
import Slideshow from './Slideshow';
import { Main, Slide, TextoSlide } from '../styledcomponents/SlideshowItems';
import { Title } from '../styledcomponents/News'; 
import img1 from '../images/5.jpg';
import img2 from '../images/6.jpg';
import img3 from '../images/8.jpg';
import img4 from '../images/9.jpg';

const Gallery = () => {
	return (
		<Main>
			<Title>Galeria</Title>
			<Slideshow controles={true} autoplay={true} velocidad="1500" intervalo="5000">
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Muestra de arte Harvard</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>Muestra de arte Harvard</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="https://www.falconmaters.com">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>Muestra de arte Harvard</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="https://www.falconmaters.com">
						<img src={img4} alt=""/>
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