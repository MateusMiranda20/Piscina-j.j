import styled from "styled-components";

export const Container = styled.div`
    background-color: blue;
    padding: 20px;
`;

export const Header = styled.div`
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
export const Lista = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 500;
    cursor: pointer;

`
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   ;

    background-image: url('/src/assets/carro.png');
    background-size: cover; /* ajusta a imagem para cobrir o elemento */
    background-position: center; /* centraliza a imagem */
    height: 100vh; /* ajusta a altura do elemento para 100% da altura da janela de visualização */
    width: 100%;
`
export const Title = styled.h2`
    margin-bottom: 20px;
    color: #fff;
    font-weight: 700;
    font-size: 50px;
`

export const SubTitle = styled.h3`
    margin-bottom: 25px;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
`
export const ButtonOrcamento = styled.button`
    padding: 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-bottom: 15px;
    font-weight: 800;

    &:hover{
        opacity: 0.8;
    }

    &:active{
       opacity: 0.5;
    }
`

export const RedeSociais = styled.p`
    
`