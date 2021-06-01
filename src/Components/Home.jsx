import React, { useContext } from 'react';
import ShowUser from './ShowUser';
import NoUser from './NoUser';
import Nav from '../Nav';
import { usersContext } from '../App';
function Home() {
  const [users] = useContext(usersContext);

  return (
    <div>
      <Nav />
      {users.length ? <ShowUser /> : <NoUser />}
    </div>
  );
}

export { Home };
