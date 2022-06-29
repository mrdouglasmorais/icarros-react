import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContent } from '@/context'
import { NavContent } from './style';

const Nav = ({logo, item}) => {
  const { user } = useContext(UserContent)
  return(
    <NavContent>
      <p>{user}</p>
      <div className="container">
        <img src={logo} alt="" width={200} height={'auto'} />
        { item?.map((item, index) => (
          <Link key={index} to={item.path}>{item.label}</Link>
        ))}
      </div>
    </NavContent>
  )
}

export default Nav;