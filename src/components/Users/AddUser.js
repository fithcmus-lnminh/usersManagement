import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const nameInputRef = useRef(); //when render, it has a current prop which holds the actual value (object)
  const ageInputRef = useRef(); //connected to the DOM elements below

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value); //value of input. No need to listen event per keystroke
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name or age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    } //+enteredAge is cast age to number for safe

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

  const errorHandler = () => {
    setError(null);
  };

  //Card cannot be CSS -> className like props to Card.js
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Type your name here..."
            onChange={usernameChangeHandler}
            value={enteredUsername}
            ref={nameInputRef /*connect element to ref*/}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Type your age here..."
            onChange={ageChangeHandler}
            value={enteredAge}
            ref={ageInputRef /*connect element to ref*/}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
