import React from 'react';
import { FooterContent, FooterButton } from './style'

const Footer = () => {
  return (
    <FooterContent>
      <FooterButton bgColor="#50a832" colorText="#fff">
        Texto do botão
      </FooterButton>
      <p>Rodapé</p>
    </FooterContent>
  )
}

export default Footer