import * as React from "react";
import Box from "@mui/material/Box";

type Props = {
  text: string;
};

function Tag(props: Props) {
  const { text } = props;

  return (
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
      {text}
    </Box>
  );
}

export default Tag;
