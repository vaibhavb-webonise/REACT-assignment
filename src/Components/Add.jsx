import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { usersContext } from "../App";
import { validation } from "../Validation";
import "../Styles/Add.css";
import { Link } from "react-router-dom";
function Add() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    place: "",
    contact: "",
    nameError: "",
    placeError: "",
    contactError: "",
  });
  const [users, setUsers] = useContext(usersContext);
  const history = useHistory();

  //==========Functions =========
  const onChangeHandler = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    const details = {
      name: currentUser.name,
      place: currentUser.place,
      contact: currentUser.contact,
      key: Date.now(),
    };
    const newUserArray = users.concat(details);
    setUsers(newUserArray);
    console.log("user object is ===>", users);
  };

  const goHome = () => {
    history.push("/");
  };

  const clickHandler = (e) => {
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

  const btnText = "<Back";
  //=============================
  return (
    <>
      <Link to="/">
        <button className="backbtn">{btnText}</button>
      </Link>
      <div className="form">
        <input
          type="text"
          value={currentUser.name}
          name="name"
          onChange={onChangeHandler}
          placeholder="Enter User Name"
        />
        {currentUser.nameError}
        <input
          type="text"
          value={currentUser.place}
          name="place"
          onChange={onChangeHandler}
          placeholder="Enter Place"
        />
        {currentUser.placeError}
        <input
          type="text"
          value={currentUser.contact}
          name="contact"
          onChange={onChangeHandler}
          placeholder="Enter Valid Contact Number"
        />
        {currentUser.contactError}
        <button className="button" onClick={() => clickHandler()}>
          Add User To List
        </button>
      </div>
    </>
  );
}

export default Add;
