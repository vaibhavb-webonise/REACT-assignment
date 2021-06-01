import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className='nav'>
      <h3>Logo</h3>
      <ul>
        <Link to='/add'>
          <li>Add User</li>
        </Link>       
      </ul>
    </div>
  );
}

export default Nav;
