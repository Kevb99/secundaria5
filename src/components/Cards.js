import React from 'react';
import { TeamContainer, Team, CardContainer, CardPic, CardInfo, Name, Position, MinCardContainer, MinInfo, MinContainer, Trigger } from '../styledcomponents/CardElements';
import { Title } from '../styledcomponents/News';
import dire from "../images/dire.jpg";
import vice from "../images/vice.jpg";
import sec from "../images/sec.jpg";
import jefa from "../images/jefa.jpg";

export const Cards = () => {
    return (
        <>
            <Trigger>
                <Title>Equipo de conduccion 2021</Title>
                <MinContainer>
                    <MinCardContainer>
                        <MinInfo>
                            <img src={dire} alt="" />
                            <p>Nora Fuentes</p>
                            <p>Directora</p>
                        </MinInfo>
                        <MinInfo>
                            <img src={vice} alt="" />
                            <p>Elisa Ramirez</p>
                            <p>Vicedirectora</p>
                        </MinInfo>
                        <MinInfo>
                            <img src={jefa} alt="" />
                            <p>Gabriela Piccinini</p>
                            <p>Jefa de preceptores</p>
                        </MinInfo>
                        <MinInfo>
                            <img src={sec} alt="" />
                            <p>Secretaria</p>
                            <p>Secretaria</p>
                        </MinInfo>
                    </MinCardContainer>
                </MinContainer>
            </Trigger>
            <TeamContainer>
                <Title>Equipo de conduccion 2021</Title>
                <Team>
                    <CardContainer variant="left">
                        <CardPic> <img src={vice} alt="" /> </CardPic>
                        <CardInfo>
                            <Name>Elisa Ramirez</Name>
                            <Position >Vicedirectora</Position>
                        </CardInfo>
                    </CardContainer>
                    <div>
                        <CardContainer variant="top">
                            <CardPic> <img src={dire} alt="" /> </CardPic>
                            <CardInfo>
                                <Name>Nora Fuentes</Name>
                                <Position>Directora</Position>
                            </CardInfo>
                        </CardContainer>
                        <CardContainer variant="bottom">
                            <CardPic> <img src={sec} alt="" /> </CardPic>
                            <CardInfo>
                                <Name>Secretaria</Name>
                                <Position>Secretaria</Position>
                            </CardInfo>
                        </CardContainer>
                    </div>
                    <CardContainer variant="right">
                        <CardPic> <img src={jefa} alt="" /> </CardPic>
                        <CardInfo>
                            <Name>Gabriela Piccinini</Name>
                            <Position>Jefa de preceptores</Position>
                        </CardInfo>
                    </CardContainer>
                </Team>
            </TeamContainer>
        </>
    );
};
