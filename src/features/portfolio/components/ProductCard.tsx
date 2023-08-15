import { Product } from "../../../pages";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import Tag from "../../../shared/components/Tag";
import Box from "@mui/material/Box";

type Props = {
  product: Product;
};

function ProductCard(props: Props) {
  const { product } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={product.productImage.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <div
          dangerouslySetInnerHTML={{
            __html: product.detailedInformation,
          }}
        ></div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "5px",
          }}
        >
          {product.useSkills.map((skill) => (
            <Tag key={skill} text={skill} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
