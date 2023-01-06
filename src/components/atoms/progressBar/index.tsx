import React from "react";
import styles from "./styles.module.scss";

export interface ProgressBarProps {
  value: number;
  limit: number;
}

const ProgressBar = ({ value, limit }: ProgressBarProps) => {
  const percentage = (value * 100) / limit;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.value} style={{ width: `${percentage}%` }}></div>
      </div>
      <div className={styles.text}>{`${value}/${limit}`}</div>
    </div>
  );
};

export default ProgressBar;
