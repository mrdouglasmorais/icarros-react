import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify'

import { api } from '@/service/api';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { FormContainer, ContactCard } from './styles';
 
const Contact = () => {
  const [ data, setData ] = useState();

  const sendData = useCallback((e) => {
    e.preventDefault();

    api.post('', data)
      .then(res => {
        toast('Mensagem enviada com sucesso', {
          type: 'success'
        })
        console.log(res.status)
      })
      .catch( err => {

        toast('Ooops, falha no engano', {
          type: 'error',
        })
        console.error(err)
      })
  }, [data]);

  return(
    <>
      <Nav />
      <div className="qualquer">
        <p>Texto adicionado</p>
      </div>
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
            <input type="submit" value="Enviar"/>
          </form>
        </ContactCard>
      </FormContainer>
      <Footer/>
    </>
  )
}

export default Contact;