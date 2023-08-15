import React from "react";
import { render } from "@testing-library/react";
import ProfileWrapper from "./ProfileWrapper";

const createDOM = () => {
  return render(<ProfileWrapper>test</ProfileWrapper>);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
