import Box from "@mui/material/Box";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";

type Props = {
  text: string;
};

function Category(props: Props) {
  const { text } = props;
  return (
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
        {text}
      </Box>
    </Box>
  );
}

export default Category;
