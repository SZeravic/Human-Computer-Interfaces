import React from "react";
import { graphql } from "gatsby";
import MainContent from "../components/Layout/MainContent";

export default ({ data }) => {
  return (
    <>
      <MainContent>
        <h1> { data.site.siteMetadata.title } </h1>
        <p> { data.site.siteMetadata.description } </p>
      </MainContent>
    </>
  );
};

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
