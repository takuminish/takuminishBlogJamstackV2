import React from "react";
import { render } from "@testing-library/react";
import ProductCard, { Props } from "./ProductCard";

const createDOM = () => {
  const props: Props = {
    product: {
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
  };
  return render(<ProductCard product={props.product} />);
};

test("snapshot", () => {
  const { container } = createDOM();

  expect(container).toMatchSnapshot();
});
