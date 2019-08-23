import React from "react";
import { graphql } from "gatsby";
import { BlogIndex } from "components";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.data.allMarkdownRemark.edges,
      filteredPosts: this.props.data.allMarkdownRemark.edges,
      searchText: ""
    };
    this.onChange = this.onChange.bind(this);
    // console.log(props);
  }

  onChange(e) {
    let postList = this.state.posts;

    this.setState ({
      searchText: e.target.value
    })

    if (this.searchText !== "") {
      // console.log(this.state);
      // console.log(this.state.posts);
      // console.log(this.state.filteredPosts);
      // console.log(currentList);
      // console.log(e.target.value);
      // newList.push(currentList[0]);

      postList = postList.filter(element => {
        const searchTerm = element.node.frontmatter.title.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return searchTerm.includes(filter);
      });
    }
    else {
      postList = this.state.posts;
    }

    this.setState ({
      filteredPosts: postList
    });
  }

  onClick() {
    this.setState ({
      searchText: "",
      filteredPosts: this.props.data.allMarkdownRemark.edges,
    })
    document.getElementById('searchInput').value = '';
  }

  render() {
    return (
      <>  
        {/* <form className="searchForm">
            <input
              type="text"
              className="inputForm"
              id="addInput"
              placeholder="Search here..."
              // onChange={this.onChange}
            />
        </form> */}
  
        <div className="container">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.onChange}
            id="searchInput"
            autoComplete="off"
          />
          <div className="search" onClick={() => this.onClick()}></div>
        </div>  
        <BlogIndex posts={this.state.filteredPosts} />
      </>
    );
  }
}

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
          html
        }
      }
    }
  }
`;

// export default ({
//   data: {
//     allMarkdownRemark: { edges: posts } // Rename edges to posts
//   }
// }) => {

//   // onchange() {
//   //   console.log(data);
//   // }

//   return (
//     <>
//       {/* <div className="search-div">
//         <input
//           type="text"
//           placeholder="Upišite pojam"
//           // onChange={this.onChange}
//         />
//       </div> */}

//       {/* <form className="searchForm">
//           <input
//             type="text"
//             className="inputForm"
//             id="addInput"
//             placeholder="Search here..."
//             // onChange={this.onChange}
//           />
//       </form> */}

//       <div class="container">
//         <input
//           type="text"
//           placeholder="Search..."
//           // onChange={this.onChange}
//         />
//         <div class="search"></div>
//       </div>

//       <BlogIndex posts={posts} />
//     </>
//   );
// };



/* REMINDER */

// handleChange(e) {
// 	// Variable to hold the original version of the list
//   let currentList = [];
// 	// Variable to hold the filtered list before putting into state
//   let newList = [];
  
// 	// If the search bar isn't empty
//   if (e.target.value !== "") {
// 		// Assign the original list to currentList
//     currentList = this.props.items;
    
// 		// Use .filter() to determine which items should be displayed
// 		// based on the search terms
//     newList = currentList.filter(item => {
// 			// change current item to lowercase
//       const lc = item.toLowerCase();
// 			// change search term to lowercase
//       const filter = e.target.value.toLowerCase();
// 			// check to see if the current list item includes the search term
// 			// If it does, it will be added to newList. Using lowercase eliminates
// 			// issues with capitalization in search terms and search content
//       return lc.includes(filter);
//     });
//   } else {
// 		// If the search bar is empty, set newList to original task list
//     newList = this.props.items;
//   }
// 	// Set the filtered state based on what our rules added to newList
//   this.setState({
//     filtered: newList
//   });
// }