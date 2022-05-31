import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const Dash = () => {
  const [ load, setIsLoad ] = useState(false);
  return (
    <>
      <h1>Painel</h1>
      <Link to="/">Clique aqui para retornar para a home</Link>
      <Button 
        label="Clique aqui" 
        action={() => setIsLoad(!load)}
        type="danger"
        isDisable={load}
      />
    </>

  )
}

export default Dash;