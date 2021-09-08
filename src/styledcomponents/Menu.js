import styled from "styled-components";

export const Anchor = styled.a`
    text-decoration: none;
    padding: 20px;
    color: #fff;
    font-size: 24px;
    &:hover{
        text-decoration: underline;
    }
`;

export const Nav = styled.nav`
    z-index: 11;
    background: #000;
    padding: 20px;
    text-align: center;
    position: sticky;
    top: 0;
    width: 100%;
    @media(max-width:430px){
        display:none;
    }
`;