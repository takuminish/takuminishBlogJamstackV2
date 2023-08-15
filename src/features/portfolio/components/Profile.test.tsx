import React from "react";
import { render } from "@testing-library/react";
import Profile, { Props } from "./Profile";

const createDOM = () => {
  const props: Props = {
    profile: {
      fieldId: "profile",
      name: "name1",
      introduction: "introduction1",
      githubUrl: "https://testfwaefa.com",
      qiitaUrl: "https://testfwaefa.com",
      profileImage: {
        url: "https://testfwaefa/comofile.jpeg",
        height: 400,
        width: 400,
      },
    },
  };
  return render(<Profile profile={props.profile} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
