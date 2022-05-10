import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./index";

describe("Loading Component", () => {
  it("loading is true", () => {
		const {container} = render(<Loading loading/>);
		expect(container.firstChild?.firstChild).toHaveClass('lds-dual-ring')
  });
	it("loading is false", () => {
		render(<Loading loading = {false}><p>Hello World</p></Loading>);
		const ele = screen.getByText(/Hello World/i);
  expect(ele).toBeInTheDocument();
  });
});
