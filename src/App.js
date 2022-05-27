import React from 'react';
import Routes from './routes';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './globalStyle';

import "react-toastify/ReactToastify.min.css";

const App = () => {
  return(
    <>    
      <GlobalStyle/>
      <Routes />
      <ToastContainer 
        position="bottom-right" 
        newestOnTop
      />
    </>
  )
}


export default App;