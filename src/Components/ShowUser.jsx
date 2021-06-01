import React, { createContext, useContext } from "react";
import { usersContext } from "../App";
import { Link } from "react-router-dom";
import "../Styles/Show.css";

export const editContext = createContext();

function ShowUser() {
  const [users, setUsers] = useContext(usersContext);

  function deleteUser(key) {
    const newUserArray = users.filter((user) => user.key !== key);
    console.log("newUserArray is ", newUserArray);
    setUsers(newUserArray);
  }
  return (
    // <div className="showUser">
    <div className="showUser">
      <table>
        <thead>
          <tr className="user heading">
            <th>User</th>
            <th>Contact</th>
            <th>Place</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {users.map((user) => {
          return (
            <tr key={user.key} className="user">
              <td>{user.name}</td>
              <td>{user.contact}</td>
              <td>{user.place}</td>
              <td>
                <span className="buttons">
                  <button onClick={() => deleteUser(user.key)}>Delete</button>
                </span>
              </td>
              <td>
                <span className="buttons">
                  <button>
                    <Link to={`/update/${user.key}`}>Edit</Link>
                  </button>
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ShowUser;
