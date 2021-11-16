import React from "react";
import { useRouter } from "next/router";

import Image from "../../Image";

import styles from "./styles.module.scss";
import logo from "../../../public/static/assets/logo_commcepta.png";

function Header() {
  const router = useRouter();

  return (
    <div className={styles.header_container}>
      <Image
        src={logo}
        alt="logo"
        quality={100}
        onClick={() => router.push("/home")}
        className={styles.logo}
      ></Image>
    </div>
  );
}

export default Header;
