import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Show.css';

function NoUser() {
  return (
    <div className="noUser">
      <h1 className="nouser-content">No users found at the moment.</h1>
      <h2 className="nouser-content">Please add Some Users </h2>
      <Link to="/add">
        <h2 className="nouser-content">Add User</h2>
      </Link>
    </div>
  );
}

export { NoUser };
