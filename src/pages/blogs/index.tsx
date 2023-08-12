import * as React from "react";
import { graphql, PageProps } from "gatsby";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      id: string;
      frontmatter: {
        date: string;
        description: string;
        title: string;
        icon: string;
      };
    }[];
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
              <Card sx={{ backgroundColor: "#fffff" }}>
                <CardActionArea href={node.id}>
                  <CardContent>
                    <Box
                      sx={{
                        paddingBottom: "10px",
                      }}
                    >
                      <Typography variant="h6">
                        {node.frontmatter.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {node.frontmatter.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        paddingBottom: "10px",
                      }}
                    >
                      <Box>
                        <FolderIcon
                          color="primary"
                          sx={{
                            verticalAlign: "middle",
                          }}
                        />
                        <Box
                          component="span"
                          sx={{
                            verticalAlign: "middle",
                            color: "#37bdf8",
                            fontSize: "13px",
                            fontWeight: 700,
                          }}
                        >
                          カテゴリー
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          gap: "5px",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            padding: "0 7px",
                            backgroundColor: "#94a3b8",
                            borderRadius: "10px",
                            color: "#ffffff",
                            fontSize: "13px",
                            fontWeight: 700,
                          }}
                        >
                          タグ
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        createdAt: 2021-12-31
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
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
          icon
        }
      }
    }
  }
`;

export default BlogIndexPage;
