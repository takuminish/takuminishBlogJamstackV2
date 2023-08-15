import React from "react";
import { render } from "@testing-library/react";
import Products, { Props } from "./Products";

const createDOM = () => {
  const props: Props = {
    products: [
      {
        fieldId: "product",
        name: "product1",
        detailedInformation: "<p>test</p>",
        useSkills: ["skill1", "skill2"],
        productImage: {
          url: "https://images.7d0c9b77edc94b119a187f97716ed763/image.webp",
          height: 544,
          width: 1140,
        },
      },
      {
        fieldId: "product",
        name: "product1",
        detailedInformation: "<p>test</p>",
        useSkills: ["skill1", "skill2"],
        productImage: {
          url: "https://images.7d0c9b77edc94b119a187f97716ed763/image.webp",
          height: 544,
          width: 1140,
        },
      },
    ],
  };
  return render(<Products products={props.products} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
