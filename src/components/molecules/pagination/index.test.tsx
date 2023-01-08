import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from ".";

describe("<Pagination /> component", () => {
  const limit = 20;
  const count = 59;
  const makeRequestMock = jest.fn();

  it("should render the component properly given props", () => {
    const expectedPaginationText = "1-21 of 59";

    render(
      <Pagination limit={limit} count={count} onMakeRequest={makeRequestMock} />
    );

    const text = screen.getByTestId("pagination-text");

    expect(text.textContent).toBe(expectedPaginationText);
  });

  describe("when the page is the initial", () => {
    it("should disable the 'prev' button", () => {
      render(
        <Pagination
          limit={limit}
          count={count}
          onMakeRequest={makeRequestMock}
        />
      );

      const prevButton = screen.getByTestId("prev-button");
      fireEvent.click(prevButton);

      expect(makeRequestMock).not.toHaveBeenCalled();
    });

    it("should allow request for 'next' page", () => {
      const expectedPaginationText = "21-41 of 59";

      render(
        <Pagination
          limit={limit}
          count={count}
          onMakeRequest={makeRequestMock}
        />
      );

      const nextButton = screen.getByTestId("next-button");
      fireEvent.click(nextButton);

      expect(makeRequestMock).toHaveBeenCalled();

      const text = screen.getByTestId("pagination-text");
      expect(text.textContent).toBe(expectedPaginationText);
    });
  });

  describe("when the page is the last", () => {
    it("should disable the 'next' button", () => {
      render(
        <Pagination
          limit={limit}
          count={count}
          onMakeRequest={makeRequestMock}
        />
      );

      // Next 3 lines move the pagination to the last page:
      const nextButton = screen.getByTestId("next-button");
      fireEvent.click(nextButton);
      fireEvent.click(nextButton);
      fireEvent.click(nextButton);

      // The 3rd time the button is clicked is disabled so the call to the function
      // is not performed as expected.
      expect(makeRequestMock).toHaveBeenCalledTimes(2);
    });

    it("should allow request for 'prev' page", () => {
      const expectedPaginationText = "21-41 of 59";

      render(
        <Pagination
          limit={limit}
          count={count}
          onMakeRequest={makeRequestMock}
        />
      );

      // Next 3 lines move the pagination to the last page:
      const nextButton = screen.getByTestId("next-button");
      fireEvent.click(nextButton);
      fireEvent.click(nextButton);

      const prevButton = screen.getByTestId("prev-button");
      fireEvent.click(prevButton);

      expect(makeRequestMock).toHaveBeenCalled();

      const text = screen.getByTestId("pagination-text");
      expect(text.textContent).toBe(expectedPaginationText);
    });
  });
});
