import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { hotjar } from 'react-hotjar';
import TagMananger from 'react-gtm-module';

import store from '@/store';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './globalStyle';

import "react-toastify/ReactToastify.min.css";

// hotjar configs
hotjar.initialize('3029463');
hotjar.identify('3029463', {
  userProperty: 'value'  
});
hotjar.event('button-click');
hotjar.stateChange('/');

// use enviroments .env file
console.log(process.env.VALUE_ENV);

// google TAG manager
const tagManagerArgs = {
  gtmId: process.env.TAG_MANAGER
}

TagMananger.initialize(tagManagerArgs);

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