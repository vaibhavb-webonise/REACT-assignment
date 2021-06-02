import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { usersContext } from '../App';
import { validation } from '../Validation';
import '../Styles/Add.css';

function UpdateUser({ match }) {
  const [users, setUsers] = useContext(usersContext);
  const currentId = match.params.id;
  const currentUserDetails = users.filter(
    (user) => user.key.toString() === currentId
  )[0];
  const [currentUser, setCurrentUser] = useState({
    ...currentUserDetails,
    nameError: '',
    placeError: '',
    contactError: '',
  });

  const history = useHistory();
  const onChangeHandler = (e) =>
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });

  const clickHandler = (e) => {
    e.preventDefault();
    const { name, contact, place } = validation(currentUser);
    if (name || place || contact) {
      setCurrentUser({
        ...currentUser,
        nameError: name,
        placeError: place,
        contactError: contact,
      });
    } else {
      setCurrentUser({
        ...currentUser,
        nameError: name,
        placeError: place,
        contactError: contact,
      });
      addUser();
      goHome();
    }
  };

  const goHome = () => {
    history.push('/');
  };

  const addUser = () => {
    const details = {
      name: currentUser.name,
      place: currentUser.place,
      contact: currentUser.contact,
      key: Date.now(),
    };
    const removedUserArray = users.filter(
      (user) => user.key.toString() !== currentId
    );
    const newUserArray = removedUserArray.concat(details);
    setUsers(newUserArray);
  };

  return (
    <form className="form">
      <input
        type="text"
        value={currentUser.name}
        name="name"
        onChange={onChangeHandler}
      />
      {currentUser.nameError}
      <input
        type="text"
        value={currentUser.place}
        name="place"
        onChange={onChangeHandler}
      />
      {currentUser.placeError}
      <input
        type="text"
        value={currentUser.contact}
        name="contact"
        onChange={onChangeHandler}
      />
      {currentUser.contactError}
      <button onClick={clickHandler}>Update User To List</button>
    </form>
  );
}

export { UpdateUser };
