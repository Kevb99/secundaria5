import React from 'react';
import { Title } from '../styledcomponents/News';
import { InfoContainer, InfoMaps } from '../styledcomponents/LocationItems';
import { Maps } from '../styledcomponents/LocationItems';

const Location = () => {
    return (
        <>
            <Title>Ubicacion</Title>
            <InfoContainer>
            <Maps title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.86874525634593!2d-58.212070950124385!3d-34.75811369957333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f37e2eeb25d%3A0xe38e34bf5e0b39cf!2sEscuela%20de%20educaci%C3%B3n%20media%20N%C2%B0%205%20-%20Escuela%20N%C2%B0%209!5e0!3m2!1ses-419!2sar!4v1623453131374!5m2!1ses-419!2sar" frameborder="0"></Maps>
                <InfoMaps>
                    <h4>Direccion</h4>
                    <p>Calle 148 1041 Berazategui Oeste, CP 1884</p>
                    <h4>Telefono</h4>
                    <p>011 4226-3451</p>
                    <h4>Horarios</h4>
                    <p>Lunes a Viernes 8:00am - 9:00pm</p>
                    <p>Sabados y Domingos 11:00am - 11:00pm</p>
                </InfoMaps>            
            </InfoContainer>

        </>
    )
}

export default Location
