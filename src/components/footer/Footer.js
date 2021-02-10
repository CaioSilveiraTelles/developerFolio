import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Copyright ©2020 Todos direitos reservados")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          This Website is made with by{" "}
          <a href="https://github.com/CaioSilveiraTelles">
            Caio Silveira
          </a>
        </p>
      </div>
    </Fade>
  );
}
