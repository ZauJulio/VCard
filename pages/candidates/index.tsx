import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";

import Title from "../../components/Tittle";
import Select from "../../components/Select";
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";

import { VCardContext } from "../../context";

import { getAllUsersData } from "../../services/api";

import styles from "./styles.module.scss";
import { colors } from "../../styles/vars";
import type UserData from "../../types/UserData";

const Candidates: NextPage = () => {
  const ctx = useContext(VCardContext);
  const [users, setUsers] = useState<UserData[]>([]);
  const [currUser, setCurrUser] = useState<UserData>();

  useEffect(() => {
    getAllUsersData()
      .then((_users) => setUsers(_users))
      .catch((err) => alert(err));
  }, []);

  const getUserName = (user: UserData) => {
    return `${user.first_name} ${user.last_name}`;
  };

  const handleSelectUser = (index: number) => {
    setCurrUser(users[index]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    ctx.handleUpdate(currUser?.id ?? "");
  };

  return (
    <div className={styles.candidates}>
      <Head>
        <title>VCard - Candidates</title>
        <meta name="description" content="VCard Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left_container}>
          <Title color={colors.blue} />
          <BackButton className={styles.back_button} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.selector_field}>
            <label>Selecione um candidato da lista</label>

            <Select
              className={styles.select}
              onChange={handleSelectUser}
              options={users?.map((user) => getUserName(user))}
              selected={users?.indexOf(currUser as UserData)}
              value={`${currUser ? getUserName(currUser) : "Candidato"}`}
            />
          </div>

          <Button
            type="submit"
            className={styles.submit_button}
            disabled={currUser ? false : true}
          >
            gerar vCard
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Candidates;
