import React from "react";
import styles from "./styles.module.scss";

export interface ModalProps {
  children: JSX.Element;
  onBackdropClick: () => void;
}

const Modal = ({ children, onBackdropClick }: ModalProps) => {
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div className={styles.backdrop} onClick={() => onBackdropClick()}></div>
    </>
  );
};

export default Modal;
