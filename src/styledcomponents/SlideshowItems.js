import styled from "styled-components";

const Main = styled.main`
    max-width: 70%;
	margin: 50px auto;
	overflow: hidden;
`;

const ContenedorPrincipal = styled.div`
	position: relative;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	position: relative;
	height: 70%;

	img {
		width: 100%;
		height: 70%;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
	background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.5)'};
	color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	width: 100%;
	padding: 20px 60px;
	text-align: center;
	font-size: 24px;

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 80%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	
	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}

	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;

const ShowAllBtn = styled.div`
	display: flex;
	justify-content: center;
	max-width: 100%;
	margin-top: 20px;
	button{
		height: 100px;
		width: 250px;
		z-index: 10;
		background: #ff9900;
		padding: 20px 50px;
		color: #000;
		font-weight: bold;
		font-size: 24px;
		border: 1px solid #000;
		cursor: pointer;
		&:active{
			background: #d3891a;
			transform: scale(.95);
		}
		/* @media (max-width: ) */
	}
`;

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export { Titulo, Boton, Controles, TextoSlide, Slide, ContenedorSlideshow, ContenedorPrincipal, Main, ShowAllBtn, };