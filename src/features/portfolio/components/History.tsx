import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function History() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
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
          }}
        >
          Repeat
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
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
          }}
        >
          Repeat
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
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
          }}
        >
          Repeat
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator
          sx={{
            margin: "0 7px",
          }}
        >
          <TimelineDot variant="outlined" color="success" />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            boxShadow: "1px 1px 1px 1px #dddddd",
            borderRadius: "10px",
          }}
        >
          Repeat
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default History;
