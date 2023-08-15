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
      <div dangerouslySetInnerHTML={{ __html: skill.detailedInfomation }}></div>
    </Paper>
  );
}

export default SkillCard;
