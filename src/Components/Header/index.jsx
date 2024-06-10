/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.jsx';


import {
  Container, Header, Lista, Logo, Title, SubTitle, ButtonOrcamento, RedeSociais
} from './styles'


function Headers() {
  return (
    <><Container>
      <Header>
        <div>
          <Lista>Sobre nós</Lista>
          <Lista>Serviços</Lista>
          <Lista>Vantagens</Lista>
          <Lista>Galeria</Lista>
          <Lista>Contatos</Lista>
        </div>
      </Header>
    </Container><>
        <Logo>
          <Title>
            J.J PISCINAS
          </Title>
          <SubTitle>
            Excelência em construção e manutenção de piscinas residenciais
          </SubTitle>
          <ButtonOrcamento>
            Solicite seu orçamento
          </ButtonOrcamento>
          <RedeSociais>
            <div>
              <a href='https://www.instagram.com/j.j_piscinas/' target='_blank'>@J.J_Piscinas</a>
              <p>Email</p>
            </div>
          </RedeSociais>
        </Logo>
      </></>
  )
}

export default Headers