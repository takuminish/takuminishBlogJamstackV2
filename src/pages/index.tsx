import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../shared/components/Layout";

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
    <Layout>
      <div>
        {allMarkdownRemark.nodes.map((node) => {
          return <h1>{node.frontmatter.title}</h1>;
        })}
      </div>
    </Layout>
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
