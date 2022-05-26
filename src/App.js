import React from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer';

const App = () => {
  return(
    <React.Fragment>
      <Nav />
      <h1>Hello, eu funcionei.</h1>
      <p>Até que em fim...</p>
      <Footer/>
    </React.Fragment>
  )
}


export default App;