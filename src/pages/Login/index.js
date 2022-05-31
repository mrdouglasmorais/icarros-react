import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { authAPI } from '@/service/api';

import { Container } from './style';

const Login = () => {
  const navigate = useNavigate();
  const [ data, setData ] = useState();

  const submitLogin = e => {
    e.preventDefault();
    authAPI.post('session', data)
    
    .then( res => {
      const { token } = res.data;
      localStorage.setItem('@IcarrosToken', token)
      toast('Login realizado com sucesso', {
        type: 'success',
        onClose: () => navigate('/dash')
      })
    })
    .catch(() => {
      toast('Ooops, algo deu errado!', {
        type: 'error',
      })
    })
  } 
  return(
    <>
      <Nav />
        <Container>
          <h1>Login</h1>
          <form onSubmit={submitLogin}>
            <input 
              type="text" 
              placeholder="Usuário"
              onChange={ e => setData({...data, email: e.target.value })}
            />
            <input 
              type="password" 
              placeholder="senha"
              onChange={ e => setData({...data, password: e.target.value })}
            />
            <input type="submit" value="Logar"/>
          </form>
        </Container>
      <Footer />
    </>
  )
}

export default Login;