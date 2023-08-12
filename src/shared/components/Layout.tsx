import { ReactNode } from "react";
import Header from "./Header";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {
  children: ReactNode;
};

function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
}

export default Layout;
