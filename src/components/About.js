import React from 'react';
import Header from './Header';
import { News, Background, Info, NewsContainer, Title, SecondaryText, Image } from '../styledcomponents/News';
import news from '../images/news.jpg';
const About = () => {
    return (
        <div>
            <Header />
            <Background>
                <News>
                    <Title variant="news">Novedades</Title>
                    <NewsContainer>
                        <Image>
                            <img src={news} alt="" />
                        </Image>
                        <Info>
                            <h2>Muestra de Arte 2021</h2>
                            <p>La escuela presentara los mejores proyectos realizados durante todo el ciclo lectivo.</p>
                        </Info>
                    </NewsContainer>
                </News>

                <SecondaryText>Desliza hacia abajo para seguir en la pagina</SecondaryText>
            </Background>
        </div>
    );
};

export default About;