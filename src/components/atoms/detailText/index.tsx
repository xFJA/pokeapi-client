import React from "react";
import styles from "./styles.module.scss";

export interface DetailTextProps {
  title: string;
  value: string;
}

const DetailText = ({ title, value }: DetailTextProps) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default DetailText;
