const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/blog-post.js`);
  const response = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: postTemplate,
      path: `blog/${node.frontmatter.slug}`,
      context: {
        slug: node.frontmatter.slug
        // additional data can be passed via context
      }
    });
  });
};

//---------------------------------------------------
// Instead of importing as follows:
//
//    import Header from '../../components/Header'
//
// wouldn't it be nice to use a more readable form:
//
//    import Header from 'components/Header':
//---------------------------------------------------
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};
