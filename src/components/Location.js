import React from 'react';
import { Title } from '../styledcomponents/News';
import { InfoContainer, InfoMaps } from '../styledcomponents/LocationItems'

const Location = () => {
    return (
        <>
        <Title>Ubicacion</Title>
            <InfoContainer>
                <InfoMaps>
                <h4>Direccion</h4>
                    <p>Calle 148 1041 Berazategui Oeste, CP 1884</p>
                <h4>Telefono</h4>
                    <p>011 4226-3451</p>
                </InfoMaps>
                <InfoMaps>
                    <h4>Horarios</h4>
                    <p>Lunes a Viernes 8:00am - 9:00pm</p>
                    <p>Sabados y Domingos 11:00am - 11:00pm</p>
                </InfoMaps>
            </InfoContainer>
        
        </>
    )
}

export default Location
