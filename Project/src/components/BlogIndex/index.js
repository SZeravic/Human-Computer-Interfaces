import React from "react";
import { Link } from "gatsby";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "./styles.module.css";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    console.log(post);

    return (
        <Link to={`/blog/${post.node.frontmatter.slug}`} key={post.node.id}>
          <section className={styles.Post}>          
            <LazyLoadImage src={post.node.frontmatter.imgLink} alt='' effect='blur' className={styles.postThumb}></LazyLoadImage>

            <div className={styles.postContainer}>
              <h2 className={styles.Title}> { post.node.frontmatter.title} </h2>
              <p className={styles.Excerpt}> { post.node.excerpt } </p>
              <span className={styles.Date}> { post.node.frontmatter.date } </span>
            </div>

          </section>
        </Link>
    );
  });

  return postsList;
};
