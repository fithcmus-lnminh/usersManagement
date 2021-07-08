import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { name: "David", age: "20", id: "1" },
    { name: "Peter", age: "1", id: "2" },
  ]);

  const addUserHandler = (user) => {
    setUsersList((prevList) => {
      return [user, ...prevList];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
