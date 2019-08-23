import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "components";
import styles from "./styles.module.css";

export default () => {
  
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: { frontmatter:{ popular: { eq:true }}}
        sort: { fields: frontmatter___date, order: ASC }
      )
    {
        edges {
          node {
            id
            frontmatter {
              title
              date
              slug
              popular
            }
            excerpt(pruneLength: 300)
            html
          }
        }
      }
    }
  `);

  return (
  <aside className={styles.Aside}>
    <Container className={styles.popular}>
      <h4 className={styles.headerTitle}> Popular Posts </h4>
      <ul className={styles.unorderedList}>
      <Link to={`/blog/${data.allMarkdownRemark.edges[0].node.frontmatter.slug}`}>
        <li className={styles.listItem}>{ data.allMarkdownRemark.edges[0].node.frontmatter.title }</li>
      </Link>
      <Link to={`/blog/${data.allMarkdownRemark.edges[1].node.frontmatter.slug}`}>
        <li className={styles.listItem}>{ data.allMarkdownRemark.edges[1].node.frontmatter.title }</li>
      </Link>
      <Link to={`/blog/${data.allMarkdownRemark.edges[2].node.frontmatter.slug}`}>
        <li className={styles.listItem}>{ data.allMarkdownRemark.edges[2].node.frontmatter.title }</li>
      </Link>
      <Link to={`/blog/${data.allMarkdownRemark.edges[3].node.frontmatter.slug}`}>
        <li className={styles.listItem}>{ data.allMarkdownRemark.edges[3].node.frontmatter.title }</li>
      </Link>
      <Link to={`/blog/${data.allMarkdownRemark.edges[4].node.frontmatter.slug}`}>
        <li className={styles.listItem}>{ data.allMarkdownRemark.edges[4].node.frontmatter.title }</li>
      </Link>
      <Link to={`/blog/${data.allMarkdownRemark.edges[5].node.frontmatter.slug}`}>
        <li className={styles.listItem}>{ data.allMarkdownRemark.edges[5].node.frontmatter.title }</li>
      </Link>
      </ul>
    </Container>

    <Container className={styles.socialMedia}>
      <h4 className={styles.headerTitle}> Follow us </h4>
      <a href="https://hr.linkedin.com/" className="fa fa-linkedin"> </a>
      <a href="https://twitter.com/?lang=en" className="fa fa-twitter"> </a>
      <a href="https://www.facebook.com/" className="fa fa-facebook"> </a>
      <a href="https://www.youtube.com/" className="fa fa-youtube"> </a>
    </Container>
  </aside>
  )
};