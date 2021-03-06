import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

function Header() {
  return (
    <div>
      <Link to='/'>Streamy</Link>
      <div>
        <Link to='/'>All Streams</Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
