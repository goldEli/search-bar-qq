import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "./index";

describe("SearchBar component", () => {

  test("show error message when input valid qq", () => {
    render(<SearchBar />);

    const inputEl = screen.getByTestId("qq-input");
    userEvent.type(inputEl, "123w");

    expect(screen.getByTestId("qq-input")).toHaveValue("123w");
    expect(screen.queryByTestId("show-message")).toHaveTextContent(
      "QQ号为数字, 且开头不为0"
    );

		userEvent.type(inputEl, "0123");
		expect(screen.queryByTestId("show-message")).toHaveTextContent(
      "QQ号为数字, 且开头不为0"
    );
  });

  test("show error message when the input is empty", () => {
    render(<SearchBar />);

    const inputEl = screen.getByTestId("qq-input");
		userEvent.type(inputEl, "123123");
		userEvent.clear(inputEl);
    expect(screen.queryByTestId("show-message")).toHaveTextContent(
      "QQ号不能为空"
    );
  });
});
