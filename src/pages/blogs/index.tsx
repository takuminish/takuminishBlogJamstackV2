import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
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
        }}
        variant="h2"
      >
        Blogs
      </Typography>
      <Grid2 container spacing={3} sx={{ padding: "1rem 3rem 3rem 3rem" }}>
        {allMarkdownRemark.nodes.map((node) => {
          return (
            <Grid2 xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: "#e0efff" }}>
                <CardContent>
                  <Box
                    sx={{
                      height: "190px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "4px",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ height: "100%", fontSize: "100px" }}
                    >
                      {node.frontmatter.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6">{node.frontmatter.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {node.frontmatter.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href={node.id} variant="outlined">
                    OPEN
                  </Button>
                </CardActions>
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
