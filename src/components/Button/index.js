import React from 'react';
import { ButtonContent } from './style';

const Button = ({ label, action, type, isDisable }) => {
  const propType = type ? type : 'sucess';
  
  return (
    <ButtonContent>
      <button onClick={action} className={propType} disabled={isDisable}>
        { !isDisable ? label : ('Aguarde')}
      </button>
    </ButtonContent>
  )
}



export default Button;