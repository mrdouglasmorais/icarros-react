import React from "react";
import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const Dash = () => {
  return (
    <>
      <h1>Painel</h1>
      <Link to="/">Clique aqui para retornar para a home</Link>
      <Button 
        label="Clique aqui" 
        action={() => alert('Okay')}
        type="sucess"
      />
    </>

  )
}

export default Dash;