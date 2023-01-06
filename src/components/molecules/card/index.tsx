import React from "react";
import styles from "./styles.module.scss";

export interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  onClick: () => void;
}

const Card = ({ id, title, imageUrl, onClick }: CardProps) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <h1>{`#${id}`}</h1>
      <img alt="sprite" src={imageUrl} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Card;
