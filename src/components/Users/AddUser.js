import React from "react";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Type your name here..." />
      <label htmlFor="age">Age</label>
      <input type="number" placeholder="Type your age here..." />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
