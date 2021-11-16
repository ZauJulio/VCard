import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Title from "../../components/Tittle";
import Button from "../../components/Button";
import Image from "../../components/Image";

import icon_face from "../../public/static/assets/icon carinha.png";
import icon_vcard from "../../public/static/assets/icon vcard.png";

import styles from "./styles.module.scss";
import { colors } from "../../styles/vars";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.home_container}>
      <Head>
        <title>Commcepta - VCard Generator</title>
        <meta name="description" content="VCard Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title color={colors.cyan} />

        <div className={styles.buttons_container}>
          <Button
            className={styles.button}
            onClick={() => router.push("/candidates")}
          >
            <Image src={icon_face} alt="icon" className={styles.icon_face} />
            selecionar candidato
          </Button>

          <Button
            className={styles.button}
            onClick={() => router.push("/create")}
          >
            <Image src={icon_vcard} alt="icon" className={styles.icon_vcard} />
            criar vCard do zero
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
