import React from "react";
import { render, screen } from "@testing-library/react";
import Category from "./Category";

const createDOM = () => render(<Category text="test" />);

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});

test("props textで与えられた文字列が表示されていること", () => {
  createDOM();

  screen.findAllByText("test");
});
