import React, { useState } from "react";
import Button from "../../atoms/button";
import styles from "./styles.module.scss";

export interface PaginationProps {
  count: number;
  limit: number;
  onMakeRequest: (limit: number, offset: number) => void;
}

const Pagination = ({ count, limit, onMakeRequest }: PaginationProps) => {
  const [page, setPage] = useState<number>(0);

  const min = limit * page + 1;
  const max = min + limit > count ? count : min + limit;

  const prevButtonDisabled = page === 0;
  const nextButtonDisabled = min + limit > count;

  const handleNext = () => {
    const newOffset = (page + 1) * limit;
    onMakeRequest(limit, newOffset);
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    const newOffset = (page - 1) * limit;
    onMakeRequest(limit, newOffset);
    setPage((prev) => prev - 1);
  };

  return (
    <div className={styles.root}>
      <span className={styles.text} data-testid="pagination-text">{`${min}-${max} of ${count}`}</span>
      <div className={styles.prevButton}>
        <Button
          text="PREV"
          onClick={() => handlePrev()}
          disabled={prevButtonDisabled}
          data-testid="prev-button"
        />
      </div>
      <Button
        text="NEXT"
        onClick={() => handleNext()}
        disabled={nextButtonDisabled}
        data-testid="next-button"
      />
    </div>
  );
};

export default Pagination;
