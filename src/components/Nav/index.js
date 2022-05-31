import React from 'react';
import { Link } from 'react-router-dom';

import { NavContent } from './style';

const Nav = ({logo, item}) => {
  console.log(item);
  return(
    <NavContent>
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