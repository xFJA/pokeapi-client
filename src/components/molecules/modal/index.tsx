import React from "react";
import styles from "./styles.module.scss";

export interface ModalProps {
  children: JSX.Element;
  onBackdropClick: () => void;
}

const Modal = ({ children, onBackdropClick }: ModalProps) => {
  return (
    <div data-testid="modal">
      <div className={styles.modal}>{children}</div>
      <div className={styles.backdrop} onClick={() => onBackdropClick()} data-testid="backdrop"></div>
    </div>
  );
};

export default Modal;
