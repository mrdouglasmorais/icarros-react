import React from 'react';
import { ButtonContent } from './style';

const Button = ({ label, action, type }) => {
  return (
    <ButtonContent>
      <button onClick={action} className={type}>
        {label}
      </button>
    </ButtonContent>
  )
}

export default Button;