import styled from "styled-components";
import bg from "../images/bg.png"
import { css } from "styled-components";

export const Background = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: url(${bg});
    background-size: cover;
    background-position: center;
`;

export const SecondaryText = styled.h3`
    font-size: 15px;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, .5);
`;

export const News = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 20px;
`;

export const Image = styled.div`
    width: 80%;
    display:flex;
    text-align: center;
    align-items: center;
        img{
            align-self: center;
            width: 100%;
            }
        
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 32px;
    color: #000;
    padding: 20px;
    text-decoration: underline;

    ${({ variant }) =>
        variant === 'news' && css`
        text-align: left;`}
    
    ${({ variant }) =>
        variant === 'footer' && css`
        color: #fff;
        font-size: 24px;
        text-decoration: none;`}     

    @media(max-width: 850px){
        font-size: 25px;
    }    
    
`;

export const NewsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`;

export const Info = styled.div`
    width:50%;
    background: rgba(255 ,255, 255, .8);
    display: flex;
    flex-direction: column;
    text-align: center;
    h2{
        margin: 10px 0;
    }
    p {
        margin-top: 10px;
        font-weight: 600;
    }
`;