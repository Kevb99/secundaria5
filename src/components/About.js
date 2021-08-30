import React from 'react';
import Header from './Header';
import { News, Background, Info, NewsContainer,Title, SecondaryText } from '../styledcomponents/News';
import news from '../images/news.jpg';
const About = () => {
    return (
        <>
        <Header />
        <Background>
            <News>
            <Title variant="news">Novedades</Title>
                <NewsContainer>
                    <div>
                        <img src={news} alt="" />
                    </div>
                    <Info>
                        <h2>Muestra de Arte 2021</h2>
                        <p>La escuela presentara los mejores proyectos realizados durante todo el ciclo lectivo</p>
                    </Info>
                </NewsContainer>
            </News>

            <SecondaryText>Desliza hacia abajo para seguir en la pagina</SecondaryText>
        </Background>
        </>
    );
};

export default About;