import React from "react";
import styles from "./styles.module.scss";

export interface ButtonProps {
  text: string;
  onClick: any;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <button className={styles.root} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
