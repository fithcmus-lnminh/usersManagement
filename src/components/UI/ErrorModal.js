import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

//Backdrop only use in this component, so no need to create new Backdrop component
function Backdrop(props) {
  return <div className={styles.backdrop} />;
}

function ModalOverlay(props) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {
        ReactDom.createPortal(
          <Backdrop />,
          document.getElementById("backdrop-root")
        ) /*move to div backdrop-root*/
      }
      {
        ReactDom.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />,
          document.getElementById("modal-root")
        ) /*move to div backdrop-root*/
      }
    </React.Fragment>
  );
}

export default ErrorModal;
