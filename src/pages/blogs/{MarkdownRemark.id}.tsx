import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Box from "@mui/material/Box";
import ValueWrapper from "../../features/blogs/components/ValueWarapper";
import Typography from "@mui/material/Typography";
import DateText from "../../features/blogs/components/DateText";
import Category from "../../shared/components/Category";
import Tag from "../../shared/components/Tag";

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
          <Category text="カテゴリー" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Tag text="タグ" />
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
