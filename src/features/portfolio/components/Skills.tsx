import Typography from "@mui/material/Typography";
import { Skill } from "../../../pages";
import React from "react";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skill[];
};

const CATEGORY = {
  language: "言語",
  framework: "フレームワーク",
};

function Skills(props: Props) {
  const { skills } = props;

  const frameworkSkills = skills.filter(
    (skill) => skill.category[0] === CATEGORY.framework
  );
  const languageSkills = skills.filter(
    (skill) => skill.category[0] === CATEGORY.language
  );

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
        Framework
      </Typography>
      <Grid2 container spacing={3}>
        {frameworkSkills.map((skill) => (
          <Grid2 key={skill.name} xs={12} sm={6} md={4}>
            <SkillCard skill={skill} />
          </Grid2>
        ))}
      </Grid2>

      <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
        Language
      </Typography>
      <Grid2 container spacing={3}>
        {languageSkills.map((skill) => (
          <Grid2 key={skill.name} xs={12} sm={6} md={4}>
            <SkillCard skill={skill} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Skills;
