import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react-web';
import { useNavigate } from 'react-router-dom';

import { api } from '@/service/api';

// Redux
import { useDispatch } from 'react-redux';
import { addNewUser } from '@/store/module/user/reducer';

import * as animation from '@/animation/sending.json';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { FormContainer, ContactCard } from './styles';
import Cart from '@/assets/cars/1.png';

import { menuItem } from '@/Constants';
 
const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ data, setData ] = useState();
  const [ isSending, setIsSending ] = useState(false);
  const [ allUsers, setAllUsers ] = useState( () => {
    const usersStorage = localStorage.getItem('@users');
    if (usersStorage){
      return JSON.parse(usersStorage)
    } else {
      return []
    }
  } )

  const sendData = (e) => {
    e.preventDefault();
    setIsSending(true);

    const { name, email, phone } = data;

    localStorage.setItem('@users', JSON.stringify([...allUsers, { name, email, phone }]))
    setTimeout(() => {
      setIsSending(false);
    }, 1000);


    // api.post('', data)
    //   .then(res => {
    //     toast('Mensagem enviada com sucesso', {
    //       onOpen: () => navigate('/'),
    //       type: 'success'
    //     })
    //   })
    //   .catch( err => {
    //     toast('Ooops, falha no engano', {
    //       type: 'error',
    //     })
    //   })
    //   .finally( () => {
    //     setIsSending(false)
    //   })
  }
  
  useEffect(() => {
    allUsers.map( user => dispatch(addNewUser(user)))
  })

  return(
    <>
      <Nav 
        logo={Cart}
        item={menuItem}
      />
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

          <div>
            {allUsers.length}
          </div>
        </ContactCard>
      </FormContainer>
      <Footer/>
    </>
  )
}

export default Contact;