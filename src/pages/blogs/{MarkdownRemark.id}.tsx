import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Box from "@mui/material/Box";
import ValueWrapper from "../../features/blogs/components/ValueWarapper";
import Typography from "@mui/material/Typography";
import DateText from "../../features/blogs/components/DateText";
import Category from "../../shared/components/Category";
import Tag from "../../shared/components/Tag";
import { Blog } from "../../features/blogs/types";
import Layout from "../../shared/components/Layout";
import ogp from "../../assets/image/takuminish-portfolio-blogs-ogp.png";

type DataProps = {
  markdownRemark: Blog;
};

const BlogDetailPage = ({ data: { markdownRemark } }: PageProps<DataProps>) => {
  return (
    <Layout>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1rem 3rem 3rem 3rem",
          width: "80%",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <ValueWrapper>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              {markdownRemark.frontmatter.title}
            </Typography>
          </ValueWrapper>
          <ValueWrapper>
            <Category text={markdownRemark.frontmatter.category} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {markdownRemark.frontmatter.tags.map((tag) => (
                <Tag text={tag} />
              ))}
            </Box>
          </ValueWrapper>
          <ValueWrapper>
            <DateText
              label="createdAt"
              date={new Date(markdownRemark.frontmatter.date)}
            />
          </ValueWrapper>
        </Box>
        <article className="markdown-body">
          <span
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          ></span>
        </article>
      </Box>
    </Layout>
  );
};

export function Head() {
  return (
    <>
      <title>takuminish's Blog</title>
      <meta name="description" content="takuminishのBlogです。" />
      <meta property="og:title" content="takuminish's Blog" />
      <meta property="og:description" content="takuminish's Blog" />
      <meta property="og:image" content={ogp} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date
        description
        title
        category
        tags
      }
      html
    }
  }
`;

export default BlogDetailPage;
