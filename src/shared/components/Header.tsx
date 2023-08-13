import {
  AppBar,
  Box,
  Container,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import Logo from "../../assets/svg/Logo.svg";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #dddddd",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Logo />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              gap: "10px",
            }}
          >
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                color: "#6a7281",
                textDecoration: "none",
              }}
            >
              Takuminish.dev
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              to="/blogs"
              sx={{
                fontWeight: 700,
                color: "#6a7281",
                textDecoration: "none",
              }}
            >
              Blogs
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
