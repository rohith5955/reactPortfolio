import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */


export default function Footer() {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">Made with <span role="img">♥</span> by Rohith, Forked from <a href="https://github.com/saadpasta/developerFolio">Saad Pasta's Portfolio </a></p>
      </Fade>
    </div>
  );
}
