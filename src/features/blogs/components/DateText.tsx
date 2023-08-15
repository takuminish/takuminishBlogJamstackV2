import Typography from "@mui/material/Typography";
import { formatInTimeZone } from "date-fns-tz";
import React from "react";

export type Props = {
  label: string;
  date: Date;
};

function DateText(props: Props) {
  const { label, date } = props;

  return (
    <Typography variant="body2" color="text.secondary">
      {label}: {formatInTimeZone(date, "Asia/Tokyo", "yyyy/MM/dd")}
    </Typography>
  );
}

export default DateText;
