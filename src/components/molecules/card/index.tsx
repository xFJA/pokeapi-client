import React from "react";
import styles from "./styles.module.scss";

export interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
}

const Card = ({ id, title, imageUrl }: CardProps) => {
  return (
    <div className={styles.root}>
      <h1>{`#${id}`}</h1>
      <img alt="sprite" src={imageUrl} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Card;
