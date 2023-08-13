import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { BlogMetaData } from "../../features/blogs/types";
import BlogCard from "../../features/blogs/components/BlogCard";
import Layout from "../../shared/components/Layout";
import ogp from "../../assets/image/takuminish-portfolio-blogs-ogp.png";

type DataProps = {
  allMarkdownRemark: {
    nodes: BlogMetaData[];
  };
};

const BlogIndexPage = ({
  data: { allMarkdownRemark },
}: PageProps<DataProps>) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export function Head() {
  return (
    <>
      <title>takuminish's Blogs</title>
      <meta name="description" content="takuminishのBlogです。" />
      <meta property="og:title" content="takuminish's Blogs" />
      <meta property="og:description" content="takuminish's Blogs" />
      <meta
        property="og:image"
        content={`https://takuminish.github.io/${ogp}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          date
          description
          title
          category
          tags
        }
      }
    }
  }
`;

export default BlogIndexPage;
