import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([
    { name: "Le Nhat Minh", age: 20 },
    { name: "Nguyen Thi Thao Vy", age: 1 },
  ]);

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
