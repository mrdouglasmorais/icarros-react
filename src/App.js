import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';

import store from '@/store';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './globalStyle';

import "react-toastify/ReactToastify.min.css";

const App = () => {
  return(
    <>
      <Provider store={store}>    
        <GlobalStyle/>
        <Routes />
        <ToastContainer 
          position="bottom-right" 
          newestOnTop
        />
      </Provider>
    </>
  )
}


export default App;