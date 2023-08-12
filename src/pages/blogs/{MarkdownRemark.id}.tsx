import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Box from "@mui/material/Box";

type DataProps = {
  markdownRemark: {
    id: string;
    frontmatter: {
      date: string;
      description: string;
      title: string;
    };
    html: string;
  };
};

const BlogDetailPage = ({ data: { markdownRemark } }: PageProps<DataProps>) => {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        padding: "1rem 3rem 3rem 3rem",
        width: "80%",
      }}
    >
      <article className="markdown-body">
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        ></div>
      </article>
    </Box>
  );
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date
        description
        title
      }
      html
    }
  }
`;

export default BlogDetailPage;
