import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import ValueWrapper from "./ValueWarapper";
import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Category from "../../../shared/components/Category";
import DateText from "./DateText";
import Tag from "../../../shared/components/Tag";
import { BlogMetaData } from "../types";
import { Link } from "gatsby";
import Button from "@mui/material/Button";

export type Props = {
  metaData: BlogMetaData;
};

function BlogCard(props: Props) {
  const { metaData } = props;

  return (
    <Card sx={{ backgroundColor: "#fffff" }}>
      <CardActionArea component={Link} to={metaData.id}>
        <CardContent>
          <ValueWrapper>
            <Typography variant="h6">{metaData.frontmatter.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {metaData.frontmatter.description}
            </Typography>
          </ValueWrapper>
          <ValueWrapper>
            <Category text={metaData.frontmatter.category} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: "5px",
              }}
            >
              {metaData.frontmatter.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </Box>
          </ValueWrapper>
          <ValueWrapper>
            <DateText
              label="createdAt"
              date={new Date(metaData.frontmatter.date)}
            />
          </ValueWrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogCard;
