import React from "react";
import { render } from "@testing-library/react";
import Licenses, { Props } from "./Licenses";

const createDOM = () => {
  const props: Props = {
    licenses: [
      {
        fieldId: "license",
        name: "license1",
        passedAt: new Date("2022-06-23T15:00:00.000Z"),
        isITLicense: true,
      },
      {
        fieldId: "license",
        name: "license2",
        passedAt: new Date("2022-06-23T15:00:00.000Z"),
        isITLicense: false,
      },
    ],
  };
  return render(<Licenses licenses={props.licenses} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
