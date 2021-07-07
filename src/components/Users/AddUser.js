import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  //Card cannot be CSS -> className like props to Card.js
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Type your name here..." />
        <label htmlFor="age">Age</label>
        <input type="number" placeholder="Type your age here..." />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;