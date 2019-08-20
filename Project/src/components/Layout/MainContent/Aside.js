import React from "react";
import { Container } from "components";
import styles from "./styles.module.css";

export default () => {
  return (
  <aside className={styles.Aside}>
    <Container className={styles.socialMedia}>
      <h4 className={styles.headerTitle}> Follow us </h4>
      <a href="https://hr.linkedin.com/" className="fa fa-linkedin"> </a>
      <a href="https://twitter.com/?lang=en" className="fa fa-twitter"> </a>
      <a href="https://www.facebook.com/" className="fa fa-facebook"> </a>
      <a href="https://www.youtube.com/" className="fa fa-youtube"> </a>
    </Container>

    <Container className={styles.popular}>
      <h4 className={styles.headerTitle}> Popular Posts </h4>
      <ul className={styles.unorderedList}>
        <li className={styles.listItem}> Test 1 </li>
        <li className={styles.listItem}> Test 2 </li>
      </ul>
    </Container>

    {/* <Container>
      <h3 className={styles.AsideJobItem}> Most popular job searches </h3>
      <p className={styles.AsideJobItem}> Physical Therapist </p>
      <p className={styles.AsideJobItem}> Engineering </p>
      <p className={styles.AsideJobItem}> Nurse Practitioner </p>
      <p className={styles.AsideJobItem}> Public School Teacher </p>
      <p className={styles.AsideJobItem}> Pediatric Physician Sestra </p>
      <p className={styles.AsideJobItem}> College Professor </p>
      <p className={styles.AsideJobItem}> Flight Attendant </p>
      <p className={styles.AsideJobItem}> Zastitar </p>
      <p className={styles.AsideJobItem}> Suradnik </p>
      <p className={styles.AsideJobItem}> Accounting </p>
    </Container>

    <br/>

    <Container>
      <h3 className={styles.AsideStatistics}> Statistics </h3>
      <p className={styles.AsideStatistics}> Registriranih korisnika </p>
      <p className={styles.AsideStatistics}> 314362 </p>
      <p className={styles.AsideStatistics}> Aktivnih životopisa </p>
      <p className={styles.AsideStatistics}> 3065 </p>
      <p className={styles.AsideStatistics}> Aktivnih oglasa </p>
      <p className={styles.AsideStatistics}> 6061 </p>
      <p className={styles.AsideStatistics}> Broj slobodnih radnih mjesta </p>
      <p className={styles.AsideStatistics}> 13266 </p>
      <p className={styles.AsideStatistics}> Trenutačni broj nezaposlenih </p>
      <p className={styles.AsideStatistics}> 114457 </p>
    </Container> */}
  </aside>
  )
};
