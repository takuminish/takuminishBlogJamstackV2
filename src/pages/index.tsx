import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../shared/components/Layout";
import Experience from "../features/portfolio/components/Experience";
import { Box, Typography } from "@mui/material";

export type Experience = {
  detailedInformation: string;
  endAt: string;
  fieldId: string;
  startAt: string;
  title: string;
};
type DataProps = {
  microcmsProfile: {
    id: string;
    licenses: {
      fieldId: string;
      name: string;
      passedAt: Date;
      isITLicense: boolean;
    }[];
    products: {
      fieldId: string;
      name: string;
      detailedInformation: string;
    }[];
    profile: {
      fieldId: string;
      name: string;
      introduction: string;
      githubUrl: string;
      qiitaUrl: string;
    };
    skills: {
      fieldId: string;
      name: string;
      detailedInfomation: string;
      yearOfExperience: number;
    }[];
    experiences: Experience[];
  };
};

const BlogIndexPage = ({ data: { microcmsProfile } }: PageProps<DataProps>) => {
  return (
    <Layout>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
          Experience
        </Typography>
        <Experience experiences={microcmsProfile.experiences} />
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query MicroCMSProfileQuery {
    microcmsProfile {
      id
      licenses {
        fieldId
        name
        passedAt
        isITLicense
      }
      products {
        fieldId
        name
        detailedInformation
      }
      profile {
        fieldId
        name
        introduction
        githubUrl
        qiitaUrl
      }
      skills {
        fieldId
        name
        detailedInfomation
        yearOfExperience
      }
      experiences {
        fieldId
        title
        startAt
        endAt
        detailedInformation
      }
    }
  }
`;

export default BlogIndexPage;
