import React from "react";
import { Container } from "components";
import styles from "./styles.module.css";

export default () => {
  return (
  <aside className={styles.Aside}>

    <Container>
      <h3 className={styles.AsideJobItem}> Najtraženija zanimanja </h3>
      <p className={styles.AsideJobItem}> PRODAVAČ </p>
      <p className={styles.AsideJobItem}> KONOBAR </p>
      <p className={styles.AsideJobItem}> ČISTAČ </p>
      <p className={styles.AsideJobItem}> KUHAR </p>
      <p className={styles.AsideJobItem}> MEDICINSKA SESTRA </p>
      <p className={styles.AsideJobItem}> ODGOJITELJ </p>
      <p className={styles.AsideJobItem}> VOZAČ </p>
      <p className={styles.AsideJobItem}> 13266 </p>
      <p className={styles.AsideJobItem}> ZAŠTITAR OSOBA I IMOVINE </p>
      <p className={styles.AsideJobItem}> SURADNIK </p>
      <p className={styles.AsideJobItem}> NJEGOVATELJ </p>
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
