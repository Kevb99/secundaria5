import styled from "styled-components";

export const Maps = styled.iframe`
    width: 50%;
    height: 500px;
    margin-bottom: 0;
    border: none;
`;

export const InfoContainer = styled.div`
    display:flex;
    justify-content: space-around;
    background: rgba(255, 255, 255, .7);
`;

export const InfoMaps = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 35px;
    padding: 30px;
        h4{
                text-decoration: underline;
                font-size: 24px;
        }
        p{
                margin-bottom: 20px;
                font-size: 18px;
        }
    
`;