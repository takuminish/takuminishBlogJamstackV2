import React from "react";
import { render } from "@testing-library/react";
import Experience, { Props } from "./Experience";

const createDOM = () => {
  const props: Props = {
    experiences: [
      {
        fieldId: "experience",
        title: "experience1",
        startAt: "2015-03-31T15:00:00.000Z",
        endAt: "2019-03-30T15:00:00.000Z",
        detailedInformation: "<p> </p>",
      },
      {
        fieldId: "experience",
        title: "experience2",
        startAt: "2015-03-31T15:00:00.000Z",
        endAt: "2019-03-30T15:00:00.000Z",
        detailedInformation: "<p> </p>",
      },
    ],
  };
  return render(<Experience experiences={props.experiences} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
