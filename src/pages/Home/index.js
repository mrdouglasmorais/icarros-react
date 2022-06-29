import React, { useState, useContext } from 'react';

import { UserContent } from '@/context'

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { HomeSection } from './style';
import Cart from '@/assets/cars/1.png';

import { menuItem } from '@/Constants';

const Home = () => {
  const { setUser } = useContext(UserContent)
  const [ isLoad, setIsLoad ] = useState(false)

  const Test = () => {
    setIsLoad(!isLoad);
  }

  
  return(
    <>
      <Nav 
        logo={Cart}
        item={menuItem}
      />
        <HomeSection>
          <h1>Home</h1>
          { isLoad ? (
            <>
              <p>Carregando</p>
            </>
          ) : (
            <>
              <p>Pronto</p>
            </>
          )}
          <button onClick={ Test }>Clique me</button>
          <input 
            type="text" 
            placeholder="informe seu nome"
            onChange={ e => setUser(e.target.value)}
          />
        </HomeSection>
      <Footer />
    </>
  )
}

export default Home;