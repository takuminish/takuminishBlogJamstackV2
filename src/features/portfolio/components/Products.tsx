import { Product } from "../../../pages";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ProductCard from "./ProductCard";

export type Props = {
  products: Product[];
};

function Products(props: Props) {
  const { products } = props;

  return (
    <Grid2 container spacing={3}>
      {products.map((product) => (
        <Grid2 key={product.name} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Products;
