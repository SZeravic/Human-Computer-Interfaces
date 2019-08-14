import React from "react";
import styles from "./styles.module.css";

export default ({ children }) => {
    return (
    <nav className={styles.Nav}>
        {children}
    </nav>
    )
};
