import React from "react";
import { Container } from "components";
import styles from "./styles.module.css";

export default () => {
  return (
  <aside className={styles.Aside}>

    <Container>
      <h3 className={styles.AsideJobItem}> Najtraženija zanimanja </h3>
      <p className={styles.AsideJobItem}> Prodavac </p>
      <p className={styles.AsideJobItem}> Konobar </p>
      <p className={styles.AsideJobItem}> Cistac </p>
      <p className={styles.AsideJobItem}> Kuhar </p>
      <p className={styles.AsideJobItem}> Medicinska Sestra </p>
      <p className={styles.AsideJobItem}> Odgojitelj </p>
      <p className={styles.AsideJobItem}> Vozac </p>
      <p className={styles.AsideJobItem}> Zastitar </p>
      <p className={styles.AsideJobItem}> Suradnik </p>
      <p className={styles.AsideJobItem}> NJegovatelj </p>
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
    </Container>
  </aside>
  )
};
