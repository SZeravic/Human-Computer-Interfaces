import React from "react";
import { Container } from "components";
import styles from "./styles.module.css";

export default ({ children }) => (
  <main className={styles.Aside}>
    <Container>{children}</Container>
  </main>
);
