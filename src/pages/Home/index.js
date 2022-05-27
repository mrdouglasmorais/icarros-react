import React, { useState } from 'react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { HomeSection } from './style'

const Home = () => {

  const [ isLoad, setIsLoad ] = useState(false)

  const Test = () => {
    setIsLoad(!isLoad);
  } 
  
  return(
    <>
      <Nav />
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
        </HomeSection>
      <Footer />
    </>
  )
}

export default Home;