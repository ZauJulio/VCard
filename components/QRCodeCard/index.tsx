/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "../Image";

import styles from "./styles.module.scss";
import UserData from "../../types/UserData";

import icon_commcepta from "../../public/static/assets/icon_commcepta.png";
import logo_commcepta from "../../public/static/assets/logo_commcepta.png";
import left_scratchs_card from "../../public/static/assets/left_scratchs_card.svg";
import right_scratchs_card from "../../public/static/assets/right_scratchs_card.svg";

interface QRCodeCardProps {
  className?: string;
  qrCode: string;
  userData: UserData;
}

function QRCodeCard({ qrCode, userData, ...rest }: QRCodeCardProps) {
  return (
    <div className={`${styles.qrcode_container} ${rest.className}`}>
      <header className={styles.header}>
        <div className={styles.user_data}>
          <h1>{userData?.first_name ?? "Nome"}</h1>
          <h1>{userData?.last_name ?? "Sobrenome"}</h1>
          <h2>{userData?.title ?? "cargo"}</h2>
        </div>

        <Image
          className={styles.icon_commcepta}
          src={icon_commcepta}
          alt="logo"
        />
      </header>

      <img className={styles.qr_code} src={qrCode} alt="qr-code" />

      <div className={styles.logo_container}>
        <Image
          className={styles.logo_commcepta}
          src={logo_commcepta}
          alt="logo"
        />
      </div>

      <Image
        className={styles.left_scratchs_card}
        src={left_scratchs_card}
        alt="logo"
      />

      <Image
        className={styles.right_scratchs_card}
        src={right_scratchs_card}
        alt="logo"
      />
    </div>
  );
}

export default QRCodeCard;
