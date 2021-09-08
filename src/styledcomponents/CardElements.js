import styled from "styled-components";
import { css } from "styled-components";

export const TeamContainer = styled.div`
    text-align: center;
    @media(max-width: 510px){
        display: none;
    }
`;

export const Team = styled.div`
    color: #000;
    max-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: Open Sans;
    width: 100%;
`;

export const CardContainer = styled.div`
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
    @media (max-width: 800px){
        width: 150px;
        height: 250px;
    }
    @media (max-width: 630px){

    ${({ variant }) =>
        variant === 'left' && css`
        margin-right: 30px;
    `
    }
    ${({ variant }) =>
        variant === 'right' && css`
            margin-left: 30px;
        `
    }
    ${({ variant }) =>
        variant === 'top' && css`
        margin-bottom: 30px;
    `
    }
    ${({ variant }) =>
        variant === 'bottom' && css`
            margin-top: 30px;
        `
    }
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
        @media (max-width: 800px){
            margin-bottom: 5px;
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
    @media (max-width: 800px){
        margin-top: 10px;
    }
`;

export const Trigger = styled.div`
    display:none;
    @media(max-width: 510px){
        display: block;
    }
`;

export const MinContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MinCardContainer = styled.div`
    margin: 10px;
	width: 400px;
	height: 500px;
	background: #914646;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10%;
	box-shadow: 3px 5px 10px #000;
`;

export const MinInfo = styled.div`
	margin: 15px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	img{
		width: 80px;
 		border-radius: 100%;
 		border: 1px solid #000;
         @media(max-width:415px){
             display: none;
         }
	}
	p {
		background: #fff;
		margin: 0 10px;
		padding: 20px;
		text-align: center;
		border-radius: 10px;
		border: 1px solid #000;
		font-weight: 600;
	}
`;