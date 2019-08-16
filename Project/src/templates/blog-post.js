import React from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";

export default ({ data }) => {
  // console.log(data);
  const { markdownRemark: post } = data;
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <section className={styles.Post} dangerouslySetInnerHTML={{ __html: post.html }}/>
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