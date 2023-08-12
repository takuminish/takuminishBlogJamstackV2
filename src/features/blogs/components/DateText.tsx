import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import React from "react";

type Props = {
  label: string;
  date: Date;
};

function DateText(props: Props) {
  const { label, date } = props;

  return (
    <Typography variant="body2" color="text.secondary">
      {label}: {format(date, "yyyy/MM/dd")}
    </Typography>
  );
}

export default DateText;
