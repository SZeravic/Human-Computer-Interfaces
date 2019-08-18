import React from "react";
import { graphql } from "gatsby";
import { BlogIndex } from "components";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
      <h1>Blogs</h1>
      <BlogIndex posts={posts} />
    </>
  );
};



export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (
      filter: { frontmatter:{ published: { eq:true }}}
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
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;