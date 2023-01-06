import React from "react";
import styles from "./styles.module.scss";

export interface ProgressBarProps {
  value: number;
  limit: number;
  title: string;
}

const ProgressBar = ({ value, limit, title }: ProgressBarProps) => {
  const percentage = (value * 100) / limit;

  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div
          className={styles.valueContent}
          style={{ width: `${percentage}%` }}
        >
          <span className={styles.valueText}>{`${value}/${limit}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
