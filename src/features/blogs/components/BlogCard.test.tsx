import React from "react";
import { render } from "@testing-library/react";
import BlogCard, { Props } from "./BlogCard";

const createDOM = () => {
  const props: Props = {
    metaData: {
      id: "123",
      frontmatter: {
        date: "2020-10-31T13:37:00.000Z",
        description: "冪乗を高速に計算するアルゴリズム 計算量O(logn)",
        title: "【アルゴリズム】繰り返し二乗法",
        category: "アルゴリズム",
        tags: ["競プロ", "アルゴリズム"],
      },
    },
  };

  return render(<BlogCard metaData={props.metaData} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
