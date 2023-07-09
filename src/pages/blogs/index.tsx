import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      id: string;
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
        return (
          <Link key={node.id} to={node.id}>
            {node.frontmatter.title}
          </Link>
        );
      })}
    </div>
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
        html
      }
    }
  }
`;

export default BlogIndexPage;
