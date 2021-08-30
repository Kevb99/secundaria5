import React from 'react';
import { TeamContainer, Team, CardContainer, CardPic, CardInfo, Name, Position} from '../styledcomponents/CardElements';
import { Title } from '../styledcomponents/News';
import dire from "../images/dire.jpg";
import vice from "../images/vice.jpg";
import sec from "../images/sec.jpg";
import jefa from "../images/jefa.jpg";

export const Cards = () => {
    return (
        <TeamContainer>
            <Title>Equipo de conduccion</Title>
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
    );
};
