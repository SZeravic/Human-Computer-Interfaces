import React from "react";
import styles from "./styles.module.css";

export default ({ pageInfo }) => {
// console.log( pageInfo );
  return (
    <>
      <section className={styles.Data} dangerouslySetInnerHTML={{ __html: pageInfo.markdownRemark.html }}/>
    </>
  );
};