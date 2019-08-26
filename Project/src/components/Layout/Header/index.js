import React from "react";
import Nav from "./Nav";
import NavLink from "./NavLink";
import navLinks from "config/menu.js";
import { Link } from "gatsby";
import { Container } from "components";
import { PrivateRoute } from "components";
import { isLoggedIn, getUser } from "../../../services/auth/auth";

import styles from "./styles.module.css";

export default () => {
  const nav = navLinks.map(link => {
    if (link.private) {
      const user = getUser();
      // console.log(user);
      return (
        <PrivateRoute
          key={link.path}
          render={() => (
            <NavLink
              key={link.path}
              to={link.path}
              className={styles.PrivateLink}
              activeClassName={styles.PrivateLink_active}
            >
              {user.name}
            </NavLink>
          )}
        />
      );
    }
    if(isLoggedIn() && link.login)
      return null;

    return (
      <NavLink key={link.path} to={link.path}>
        {link.text}
      </NavLink>
    );
  });

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <Link to="/">
          <span className={styles.Logo}>Bussiness Startup</span>
        </Link>
        <Nav>{nav}</Nav>
      </Container>
    </header>
  );
};
