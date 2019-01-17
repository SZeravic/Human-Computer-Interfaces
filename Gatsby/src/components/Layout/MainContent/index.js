import React from "react";
import Main from "./Main"
import styles from "./styles.module.css";

export default ({ children }) => (
  <main className={styles.MainContent}>
    <Main>{children}</Main>
  </main>
);
