import React from "react";
import MainContent from "../components/Layout/MainContent";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import styles from "./styles.module.css";


export default ({ data }) => {
  // console.log(data);
  const { markdownRemark: post } = data;
  return (
    <>
      <Link to={`/blog/`} className={styles.Back}>
        &laquo; Go Back
      </Link>
      <MainContent>
        <h1 className={styles.Title}>{post.frontmatter.title}</h1>
        <section className={styles.Post} dangerouslySetInnerHTML={{ __html: post.html }}/>
      </MainContent>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`;