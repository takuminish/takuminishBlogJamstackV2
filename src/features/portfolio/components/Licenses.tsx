import { License } from "../../../pages";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LicenseTable from "./LicenseTable";

type Props = {
  licenses: License[];
};

function Licenses(props: Props) {
  const { licenses } = props;

  const itLicenses = licenses.filter((license) => license.isITLicense);
  const notItLicenses = licenses.filter((license) => !license.isITLicense);

  return (
    <>
      <Box sx={{ margin: "10px 0" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
          IT License
        </Typography>
        <LicenseTable licenses={itLicenses} />
      </Box>
      <Box sx={{ margin: "10px 0" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
          not IT License
        </Typography>
        <LicenseTable licenses={notItLicenses} />
      </Box>
    </>
  );
}

export default Licenses;
