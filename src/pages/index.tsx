import * as React from "react";
import { graphql, PageProps } from "gatsby";

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        date: string;
        description: string;
        title: string;
      };
      html: string;
    }[];
  };
};

const BlogIndexPage = ({
  data: { allMarkdownRemark },
}: PageProps<DataProps>) => {
  return (
    <div>
      {allMarkdownRemark.nodes.map((node) => {
        return <h1>{node.frontmatter.title}</h1>;
      })}
    </div>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          description
          title
        }
        html
      }
    }
  }
`;

export default BlogIndexPage;
