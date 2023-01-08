import React from "react";
import styles from "./styles.module.scss";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled = false, ...restProps }: ButtonProps) => {
  return (
    <button
      className={styles.root}
      onClick={() => onClick()}
      disabled={disabled}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
