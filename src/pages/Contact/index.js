import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react-web';
import { useNavigate } from 'react-router-dom';

import { api } from '@/service/api';

import * as animation from '@/animation/sending.json'

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { FormContainer, ContactCard } from './styles';
 
const Contact = () => {
  const navigate = useNavigate();

  const [ data, setData ] = useState();
  const [ isSending, setIsSending ] = useState(false);

  const sendData = useCallback((e) => {
    e.preventDefault();
    setIsSending(true);

    api.post('', data)
      .then(res => {
        toast('Mensagem enviada com sucesso', {
          onOpen: () => navigate('/'),
          type: 'success'
        })
      })
      .catch( err => {
        toast('Ooops, falha no engano', {
          type: 'error',
        })
      })
      .finally( () => {
        setIsSending(false)
      })
  }, [data]);

  return(
    <>
      <Nav />
      <FormContainer>
        <ContactCard>
          <form onSubmit={sendData}>
            <input 
              type="text" 
              placeholder="informe seu nome"
              onChange={ e => setData({ ...data, name: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Informe seu email"
              onChange={ e => setData({ ...data, email: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Informe seu telefone"
              onChange={ e => setData({ ...data, phone: e.target.value })}
            />
            { !isSending ? (
              <>
                <input type="submit" value="Enviar"/>
              </>
            ) : (
              <>
                <Lottie
                  options={{
                    width: '30%',
                    height: '30%',
                    animationData: animation
                  }}
                />
              </>
            )}
          </form>
        </ContactCard>
      </FormContainer>
      <Footer/>
    </>
  )
}

export default Contact;