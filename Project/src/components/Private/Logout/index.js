import React from "react";
import { navigate } from "gatsby";
import { handleLogout } from "services/auth/auth.js";
import styles from "./styles.module.css";

const Logout = () => (
    <a
      href="/"
      onClick={event => {
        event.preventDefault();
        handleLogout();
        navigate("/");
      }}
      className={styles.button}
    >
      Logout
    </a>
  );

export default Logout;