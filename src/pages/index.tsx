import * as React from "react";
import { graphql, PageProps } from "gatsby";

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      html: string;
    }[];
  };
};

const IndexPage = ({ data: { allMarkdownRemark } }: PageProps<DataProps>) => {
  return (
    <article className="markdown-body">
      <div
        dangerouslySetInnerHTML={{
          __html: allMarkdownRemark.nodes[0].html,
        }}
      ></div>
    </article>
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

export default IndexPage;
