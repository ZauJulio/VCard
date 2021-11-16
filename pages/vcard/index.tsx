import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { VCardContext } from "../../context";
import QRCodeCard from "../../components/QRCodeCard";
import BackButton from "../../components/BackButton";

import styles from "./styles.module.scss";

const VCard: NextPage = () => {
  const ctx = useContext(VCardContext);
  const { push, query } = useRouter();
  const id = String(query.id);

  useEffect(() => {
    if (id && !ctx.qrCode) ctx.handleUpdate(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!ctx.qrCode && !id) push("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.qrCode, id]);

  return (
    <div className={styles.vcard}>
      <Head>
        <title>Commcepta - VCard</title>
        <meta name="description" content="VCard Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BackButton className={styles.back_button} />

        <QRCodeCard
          className={styles.qrcode_card}
          userData={ctx.userData}
          qrCode={ctx.qrCode}
        />
      </main>
    </div>
  );
};

export default VCard;
