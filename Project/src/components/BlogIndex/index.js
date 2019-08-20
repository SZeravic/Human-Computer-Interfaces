import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { title, date, slug } = post.node.frontmatter;
    const { id, excerpt } = post.node;
    return (
      <div key={id} className={styles.PostDiv}>
        <Link to={`/blog/${slug}`}>
          <section className={styles.Post}>
            <h2 className={styles.Title}>
              {title}
            </h2>
            <p className={styles.Excerpt}>{excerpt}</p>
            <span className={styles.Date}>{date}</span>
          </section>
        </Link>
      </div>
    );
  });

  return postsList;
};
