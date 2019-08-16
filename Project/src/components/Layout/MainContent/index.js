import React from "react";
import Main from "./Main";
import Aside from "./Aside";
import styles from "./styles.module.css";

export default ({ children }) => {
  return (
      <main className={styles.MainContent}>
        <Main className={styles.Main}>
            {children}
        </Main>
        <Aside className={styles.Aside}/>
      </main>    
  )
};
