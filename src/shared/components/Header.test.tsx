import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

const createDOM = () => render(<Header />);

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
