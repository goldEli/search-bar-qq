import React from "react";
import { render, screen } from "@testing-library/react";
import ShowMessage from "./index";

describe("ShowMessage Component", () => {
  it("dose not render component if 'show' property is false", () => {
		const {container} = render(<ShowMessage show={false}/>);
		expect(container.firstChild).toBe(null);
  });
	it("show info message", () => {
		const {container} = render(<ShowMessage show message="msg"/>);
		const ele = screen.getByText(/msg/i);
  	expect(ele).toBeInTheDocument();
		expect(container.firstChild).toHaveProperty('style.color', 'black');
  });
	it("show error message", () => {
		const {container} = render(<ShowMessage show message="msg" type="error"/>);
		const ele = screen.getByText(/msg/i);
  	expect(ele).toBeInTheDocument();
		expect(container.firstChild).toHaveProperty('style.color', 'red');
  });
});