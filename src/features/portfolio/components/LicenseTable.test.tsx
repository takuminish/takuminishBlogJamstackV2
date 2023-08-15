import React from "react";
import { render } from "@testing-library/react";
import LicenseTable, { Props } from "./LicenseTable";

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
        isITLicense: true,
      },
    ],
  };
  return render(<LicenseTable licenses={props.licenses} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
