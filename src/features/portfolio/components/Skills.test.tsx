import React from "react";
import { render } from "@testing-library/react";
import Skills, { Props } from "./Skills";

const createDOM = () => {
  const props: Props = {
    skills: [
      {
        fieldId: "skill",
        name: "skill1",
        detailedInfomation: "<p>test</p>",
        yearOfExperience: 3,
        category: ["フレームワーク"],
      },
      {
        fieldId: "skill",
        name: "skill2",
        detailedInfomation: "<p>test</p>",
        yearOfExperience: 3,
        category: ["言語"],
      },
    ],
  };

  return render(<Skills skills={props.skills} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
