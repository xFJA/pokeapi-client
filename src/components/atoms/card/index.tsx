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
    <div className={styles.root} onClick={onClick} data-testid="card">
      <div className={styles.id}>
        <span>{`#${id}`}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}><img alt="sprite" src={imageUrl} /></div>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
