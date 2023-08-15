import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

const createDOM = () => render(<Layout>test</Layout>);

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
