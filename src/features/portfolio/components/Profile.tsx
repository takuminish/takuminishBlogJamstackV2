import Box from "@mui/material/Box";
import { Profile as ProfileType } from "../../../pages";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {
  profile: ProfileType;
};

function Profile(props: Props) {
  const { profile } = props;

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <img src={profile.profileImage.url} width="150" height="150" />
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
        {profile.name}
      </Typography>
      <Typography variant="body1">
        <div
          dangerouslySetInnerHTML={{
            __html: profile.introduction,
          }}
        ></div>
      </Typography>
      <IconButton href={profile.githubUrl}>
        <GitHubIcon />
      </IconButton>
    </Box>
  );
}

export default Profile;
