import React, { useRef, useEffect, useCallback } from 'react';
import { ContenedorPrincipal, ContenedorSlideshow, Controles, Boton } from '../styledcomponents/SlideshowItems';
import { ReactComponent as FlechaIzquierda } from '../images/iconmonstr-angel-left-thin.svg';
import { ReactComponent as FlechaDerecha } from '../images/iconmonstr-angel-right-thin.svg';

const Slideshow = ({
	children,
	controles = false,
	autoplay = false,
	velocidad = "2000",
	intervalo = "5000"
}) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		if (slideshow.current.children.length > 0) {


			const primerElemento = slideshow.current.children[0];


			slideshow.current.style.transition = `${velocidad}ms ease-in-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;


			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {

				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;


				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}


			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);

	const anterior = () => {
		if (slideshow.current.children.length > 0) {
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-in-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		if (autoplay) {
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);

			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<>
			<ContenedorPrincipal>
				<ContenedorSlideshow ref={slideshow}>
					{children}
				</ContenedorSlideshow>
				{controles && <Controles>
					<Boton onClick={anterior}>
						<FlechaIzquierda />
					</Boton>
					<Boton derecho onClick={siguiente}>
						<FlechaDerecha />
					</Boton>
				</Controles>}
			</ContenedorPrincipal>
		</>

	);
}

export default Slideshow;