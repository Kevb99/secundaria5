import styled from "styled-components";
import { css } from "styled-components";

export const TeamContainer = styled.div`
    text-align: center;
`;

export const Team = styled.div`
    color: #000;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: Open Sans;
`;

export const CardContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #914646;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 5px 10px 8px #000;

    ${({ variant }) =>
        variant === 'left' && css`
        margin-right: 90px;
    `
    }
    ${({ variant }) =>
        variant === 'right' && css`
            margin-left: 90px;
        `
    }
    ${({ variant }) =>
        variant === 'top' && css`
        margin-bottom: 90px;
    `
    }
    ${({ variant }) =>
        variant === 'bottom' && css`
            margin-top: 90px;
        `
    }
`;

export const CardPic = styled.div`
    width: 80px;
    height: 80px;
    border: 2px solid rgb(73, 72, 72);
    border-radius: 100%;
    margin: 10px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 128px;
    width: 128px;
    margin: 20px;
`;

export const Name = styled.p`
    background:#fff;
    padding: 0 20px;
    border-radius: 10px;
`;

export const Position = styled.p`
    background:#fff;
    margin-top: 30px;
    padding: 20px;
    border-radius: 10px;
`;