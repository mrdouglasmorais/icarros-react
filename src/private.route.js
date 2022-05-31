import React from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('@IcarrosToken');
  const isSectionActive = () => {
    if (isLoggedIn === null) {
      console.log('Não logado!')
      return false
    } else {
      const tokenPayload = jwt_decode(isLoggedIn);
      const expSeconds = tokenPayload.exp;
      const timeNow = Date.now() / 1000;
      console.log('Logado!')
      return timeNow > expSeconds ? false : true;
    }

  }
  return isSectionActive() ? children : <Navigate replace to='/'/>
}

export default PrivateRoute;