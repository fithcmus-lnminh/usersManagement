import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return; //+enteredAge is cast age to number for safe

    const user = {
      name: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onAddUser(user);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //Card cannot be CSS -> className like props to Card.js
  return (
    <div>
      <ErrorModal title="An error occurred!" message="Something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Type your name here..."
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Type your age here..."
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
