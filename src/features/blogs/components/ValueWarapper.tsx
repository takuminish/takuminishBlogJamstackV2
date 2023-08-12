import Box from "@mui/material/Box";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ValueWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      sx={{
        paddingBottom: "10px",
      }}
    >
      {children}
    </Box>
  );
}

export default ValueWrapper;
