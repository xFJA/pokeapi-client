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
      <h1>{id}</h1>
      <h2>{title}</h2>
      <img src={imageUrl} />
    </div>
  );
};

export default Card;
