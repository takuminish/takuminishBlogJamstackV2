import Box from "@mui/material/Box";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ProfileWrapper(props: Props) {
  const { children } = props;

  return <Box sx={{ margin: "16px 0" }}>{children}</Box>;
}

export default ProfileWrapper;
