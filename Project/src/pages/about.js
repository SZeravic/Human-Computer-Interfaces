import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageInfo from "../components/PageInfo";
import MainContent from "../components/Layout/MainContent";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "About" } }) {
        html
        frontmatter {
          date
          slug
          title
        }
      }
    }
  `);

  return (
    <>
      <MainContent>        
        <PageInfo pageInfo={data}/>
      </MainContent>
    </>
  );
};
