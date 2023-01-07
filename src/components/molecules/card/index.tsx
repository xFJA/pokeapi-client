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
      <div className={styles.id}>
        <span>{`#${id}`}</span>
      </div>
      <div className={styles.content}>
        <img alt="sprite" src={imageUrl} />
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
