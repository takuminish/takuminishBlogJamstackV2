import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../shared/components/Layout";
import Experience from "../features/portfolio/components/Experience";
import { Box, Typography } from "@mui/material";
import Skills from "../features/portfolio/components/Skills";
import Licenses from "../features/portfolio/components/Licenses";

export type Experience = {
  detailedInformation: string;
  endAt: string;
  fieldId: string;
  startAt: string;
  title: string;
};

export type Skill = {
  fieldId: string;
  name: string;
  detailedInfomation: string;
  yearOfExperience: number;
  category: string[];
};

export type License = {
  fieldId: string;
  name: string;
  passedAt: Date;
  isITLicense: boolean;
};

type DataProps = {
  microcmsProfile: {
    id: string;
    licenses: License[];
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
    skills: Skill[];
    experiences: Experience[];
  };
};

const BlogIndexPage = ({ data: { microcmsProfile } }: PageProps<DataProps>) => {
  return (
    <Layout>
      <Box sx={{ padding: "1rem 3rem 3rem 3rem" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Experience
          </Typography>
          <Experience experiences={microcmsProfile.experiences} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Skills
          </Typography>
          <Skills skills={microcmsProfile.skills} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Licenses
          </Typography>
          <Licenses licenses={microcmsProfile.licenses} />
        </Box>
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
        category
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
