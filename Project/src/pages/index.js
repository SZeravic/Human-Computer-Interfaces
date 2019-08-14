import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <>
      <h1> { data.site.siteMetadata.title } </h1>
      <p> { data.site.siteMetadata.description } </p>
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
