import Paper from "@mui/material/Paper";
import { Skill } from "../../../pages";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {
  skill: Skill;
};

function SkillCard(props: Props) {
  const { skill } = props;

  return (
    <Paper>
      {" "}
      <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "center" }}>
        {skill.name}
      </Typography>
      <Typography variant="body1">
        <div
          dangerouslySetInnerHTML={{ __html: skill.detailedInfomation }}
        ></div>
      </Typography>
    </Paper>
  );
}

export default SkillCard;
