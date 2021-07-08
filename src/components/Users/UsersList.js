import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} {user.age === 1 ? "year old" : "years old"})
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
