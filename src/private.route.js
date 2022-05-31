import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({element: Element, path: Path, ...rest}) => {
  // const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('@IcarrosToken');
  const isSectionActive = () => {
    if (isLoggedIn === null){
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
  return (
    <>
      { isSectionActive() === true && (<div><p>Logado</p></div>) }
      { isSectionActive() === false && (<div><p>Logado</p></div>) }
      {/* <Route {...rest} element={
        () => isSectionActive() ? <Element {...props}/> : navigate('/')
      }/> */}
    </>
  )
}

export default PrivateRoute;