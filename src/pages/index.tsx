import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../shared/components/Layout";
import Experience from "../features/portfolio/components/Experience";
import { Box, Typography } from "@mui/material";
import Skills from "../features/portfolio/components/Skills";
import Licenses from "../features/portfolio/components/Licenses";
import Products from "../features/portfolio/components/Products";
import { default as ProfileComponent } from "../features/portfolio/components/Profile";

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

export type Product = {
  fieldId: string;
  name: string;
  detailedInformation: string;
  useSkills: string[];
  productImage: ProductImage;
};

export type ProductImage = {
  url: string;
  height: number;
  width: number;
};

export type Profile = {
  fieldId: string;
  name: string;
  introduction: string;
  githubUrl: string;
  qiitaUrl: string;
  profileImage: {
    url: string;
    height: number;
    width: number;
  };
};

type DataProps = {
  microcmsProfile: {
    id: string;
    licenses: License[];
    products: Product[];
    profile: Profile;
    skills: Skill[];
    experiences: Experience[];
  };
};

const BlogIndexPage = ({ data: { microcmsProfile } }: PageProps<DataProps>) => {
  return (
    <Layout>
      <Box sx={{ padding: "1rem 3rem 3rem 3rem" }}>
        <Box sx={{ margin: "16px 0" }}>
          <ProfileComponent profile={microcmsProfile.profile} />
        </Box>
        <Box sx={{ margin: "16px 0" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Experience
          </Typography>
          <Experience experiences={microcmsProfile.experiences} />
        </Box>
        <Box sx={{ margin: "16px 0" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Skills
          </Typography>
          <Skills skills={microcmsProfile.skills} />
        </Box>
        <Box sx={{ margin: "16px 0" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Licenses
          </Typography>
          <Licenses licenses={microcmsProfile.licenses} />
        </Box>
        <Box sx={{ margin: "16px 0" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Products
          </Typography>
          <Products products={microcmsProfile.products} />
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
        useSkills
        productImage {
          url
          height
          width
        }
      }
      profile {
        fieldId
        name
        introduction
        githubUrl
        qiitaUrl
        profileImage {
          url
          height
          width
        }
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
