import React from "react";
import { render } from "@testing-library/react";
import SkillCard, { Props } from "./SkillCard";

const createDOM = () => {
  const props: Props = {
    skill: {
      fieldId: "skill",
      name: "skill1",
      detailedInfomation: "<p>test</p>",
      yearOfExperience: 3,
      category: ["フレームワーク"],
    },
  };

  return render(<SkillCard skill={props.skill} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
