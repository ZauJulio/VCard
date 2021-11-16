import { useRouter } from "next/router";
import React from "react";
import { colors } from "../../../styles/vars";

import styles from "./styles.module.scss";

function Footer() {
  const { pathname } = useRouter();
  const background = pathname === "/home" ? colors.background : colors.white;
  const color = pathname === "/home" ? "#ffffff" : "#aaaaaa";

  return (
    <footer className={styles.footer} style={{ background }}>
      <p style={{ color }}>© 2021. Docummented as commcepter</p>
    </footer>
  );
}

export default Footer;
