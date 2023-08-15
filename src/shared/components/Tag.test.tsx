import React from "react";
import Tag from "./Tag";
import { render, screen } from "@testing-library/react";

const createDOM = () => render(<Tag text="test" />);

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});

test("props textで与えられた文字列が表示されていること", () => {
  createDOM();

  screen.findAllByText("test");
});
