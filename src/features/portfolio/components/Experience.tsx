import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { format } from "date-fns";
import { Experience } from "../../../pages";

type Props = {
  experiences: Experience[];
};

function History(props: Props) {
  const { experiences } = props;

  return (
    <Timeline position="alternate">
      {experiences.map((experience) => (
        <TimelineItem key={experience.title}>
          <TimelineSeparator
            sx={{
              margin: "0 7px",
            }}
          >
            <TimelineDot variant="outlined" color="success" />
            <TimelineConnector sx={{ backgroundColor: "#2f7d31" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              boxShadow: "1px 1px 1px 1px #dddddd",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            {experience.title}{" "}
            {format(new Date(experience.startAt), "yyyy/MM/dd")} ~{" "}
            {experience.endAt
              ? format(new Date(experience.endAt), "yyyy/MM/dd")
              : ""}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default History;
