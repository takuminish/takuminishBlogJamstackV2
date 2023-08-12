import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { BlogMetaData } from "../../features/blogs/types";
import BlogCard from "../../features/blogs/components/BlogCard";

type DataProps = {
  allMarkdownRemark: {
    nodes: BlogMetaData[];
  };
};

const BlogIndexPage = ({
  data: { allMarkdownRemark },
}: PageProps<DataProps>) => {
  return (
    <>
      <Typography
        sx={{
          padding: "12px",
          fontWeight: 700,
        }}
        variant="h3"
      >
        Blogs
      </Typography>
      <Grid2 container spacing={3} sx={{ padding: "1rem 3rem 3rem 3rem" }}>
        {allMarkdownRemark.nodes.map((node) => {
          return (
            <Grid2 key={node.id} xs={12} sm={6} md={4}>
              <BlogCard metaData={node} />
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          date
          description
          title
        }
      }
    }
  }
`;

export default BlogIndexPage;
