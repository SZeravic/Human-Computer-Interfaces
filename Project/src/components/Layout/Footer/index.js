import React from "react";
import { Container } from "components";
import styles from "./styles.module.css";

export default () => (
  <footer className={styles.Footer}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <Container className={styles.Container}>
      Feel free to email us at realbussinessgrowth@gmail.com
      <Container>
        <a href="https://hr.linkedin.com/" className="fa fa-linkedin"> </a>
        <a href="https://twitter.com/?lang=en" className="fa fa-twitter"> </a>
        <a href="https://www.facebook.com/" className="fa fa-facebook"> </a>
        <a href="https://www.google.com/" className="fa fa-google"> </a>
        <a href="https://www.skype.com/en/" className="fa fa-skype"> </a>
        <a href="https://www.reddit.com/" className="fa fa-reddit"> </a>
        <a href="https://www.youtube.com/" className="fa fa-youtube"> </a>
        {/* <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-pinterest"></a>
        <a href="#" className="fa fa-snapchat-ghost"></a>
        <a href="#" className="fa fa-android"></a>
        <a href="#" className="fa fa-dribbble"></a>
        <a href="#" className="fa fa-vimeo"></a>
        <a href="#" className="fa fa-tumblr"></a>
        <a href="#" className="fa fa-vine"></a>
        <a href="#" className="fa fa-foursquare"></a>
        <a href="#" className="fa fa-stumbleupon"></a>
        <a href="#" className="fa fa-flickr"></a>
        <a href="#" className="fa fa-yahoo"></a>
        <a href="#" className="fa fa-rss"></a> */}
      </Container>
    </Container>
  </footer>
);
