import React from 'react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { HomeSection } from './style'

const Home = () => {
  return(
    <>
      <Nav />
        <HomeSection>
          <h1>Home</h1>
        </HomeSection>
      <Footer />
    </>
  )
}

export default Home;