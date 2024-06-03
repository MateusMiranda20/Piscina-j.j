import styled from "styled-components";

export const Container = styled.div `
    background-color: blue;
    padding: 20px;
`;

export const Header = styled.div `
    font-size: 20px;
    margin-left: 600px;
    
    div{
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 30px;
        

        :hover{
        color: white;
    }
    }
    
`
export const P = styled.p `
    font-size: 20px;
    color: black;
    font-weight: 500;
    cursor: pointer;
    
`