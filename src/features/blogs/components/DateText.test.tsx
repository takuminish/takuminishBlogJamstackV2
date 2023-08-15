import React from "react";
import { render, screen } from "@testing-library/react";
import DateText, { Props } from "./DateText";

const createDOM = (props?: Props) => {
  const defaultProps: Props = {
    label: "公開日",
    date: new Date("2021-06-12T15:00:00.000Z"),
  };

  const { label, date } = props ?? defaultProps;

  return render(<DateText label={label} date={date} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});

test("propsで与えられたlabelが表示されていること", async () => {
  createDOM();

  await screen.findByText(/公開日/);
});

test("propsで与えられたldateがyyyy/MM/dd形式で表示されること", async () => {
  createDOM();

  await screen.findByText(/2021[/]06[/]13/);
});
