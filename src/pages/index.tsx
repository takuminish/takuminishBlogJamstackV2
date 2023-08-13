import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../shared/components/Layout";
import { default as ExperienceComponent } from "../features/portfolio/components/Experience";
import { Box, Typography } from "@mui/material";
import Skills from "../features/portfolio/components/Skills";
import Licenses from "../features/portfolio/components/Licenses";
import Products from "../features/portfolio/components/Products";
import { default as ProfileComponent } from "../features/portfolio/components/Profile";
import ProfileWrapper from "../features/portfolio/components/ProfileWrapper";
import ogp from "../assets/image/takuminish-portfolio-ogp.png";

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
        <ProfileWrapper>
          <ProfileComponent profile={microcmsProfile.profile} />
        </ProfileWrapper>
        <ProfileWrapper>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Experience
          </Typography>
          <ExperienceComponent experiences={microcmsProfile.experiences} />
        </ProfileWrapper>
        <ProfileWrapper>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Skills
          </Typography>
          <Skills skills={microcmsProfile.skills} />
        </ProfileWrapper>
        <ProfileWrapper>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Licenses
          </Typography>
          <Licenses licenses={microcmsProfile.licenses} />
        </ProfileWrapper>
        <ProfileWrapper>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Products
          </Typography>
          <Products products={microcmsProfile.products} />
        </ProfileWrapper>
      </Box>
    </Layout>
  );
};

export function Head() {
  return (
    <>
      <title>takuminish's Portfolio</title>
      <meta
        name="description"
        content="takuminishのポートフォリオ+個人ブログサイトです。経歴やスキル、取得済み資格等をまとめています。"
      />
      <meta property="og:title" content="takuminish's Portfolio" />
      <meta property="og:description" content="takuminish's Portfolio" />
      <meta
        property="og:image"
        content={`https://takuminish.github.io/${ogp}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

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
