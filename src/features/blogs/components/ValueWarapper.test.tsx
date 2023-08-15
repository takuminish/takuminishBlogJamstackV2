import React from "react";
import { render } from "@testing-library/react";
import ValueWrapper from "./ValueWarapper";

const createDOM = () => render(<ValueWrapper>test</ValueWrapper>);

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
