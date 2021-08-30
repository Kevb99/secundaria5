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
    height: 950px;
`;

export const SecondaryText = styled.h3`
    font-size: 25px;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, .5);
`;

export const News = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
        div{
            width: 80%;
        }
            div>img{
                height:100%;
                width: 100%;
            }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 40px;
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
    
`;

export const NewsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`;

export const Info = styled.div`
    background: rgba(255 ,255, 255, .8);
`;