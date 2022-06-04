import React from 'react';
import { FooterContent, FooterButton } from './style';

import { useSelector } from 'react-redux';

import { allUsersData } from '@/store/module/user/reducer'

const Footer = () => {
  const state = useSelector(allUsersData);
  console.log('Estado global', state.users)
  return (
    <FooterContent>
      <FooterButton bgColor="#50a832" colorText="#fff">
        Texto do botão
      </FooterButton>
      <p>{state.users.length}</p>
      <p>Rodapé</p>
    </FooterContent>
  )
}

export default Footer