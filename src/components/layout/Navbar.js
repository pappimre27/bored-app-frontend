import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className='navbar bg-primary'>
      <ul>
        <li>
          <Link to='/'>Activities</Link>
        </li>
        <li>
          <Link to='/mylist'>My List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
