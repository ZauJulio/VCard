import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import Head from "next/head";
import { NextPage } from "next";

import Field from "../../components/Field";
import Title from "../../components/Tittle";
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";

import { VCardContext } from "../../context";

import styles from "./styles.module.scss";
import { colors } from "../../styles/vars";
import type UserData from "../../types/UserData";

const Create: NextPage = () => {
  const ctx = useContext(VCardContext);

  const [state, setState] = useState<UserData>({
    first_name: "",
    last_name: "",
    cellphone: "",
    email: "",
    company: "",
    title: "",
    street: "",
    city: "",
    state: "",
  });

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    ctx.handleNewQRCode(state);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((_state: UserData) => ({
      ..._state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={styles.create}>
      <Head>
        <title>VCard - Create</title>
        <meta name="description" content="VCard Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left_container}>
          <Title color={colors.blue} />
          <BackButton className={styles.back_button} />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <Field
              required
              value={state.first_name}
              onChange={handleChange}
              type="text"
              name="first_name"
              text="Nome"
            />

            <Field
              required
              value={state.last_name}
              onChange={handleChange}
              type="text"
              name="last_name"
              text="Sobrenome"
            />
          </div>

          <div className={styles.form_group}>
            <Field
              required
              value={state.cellphone.replace(
                /^(\d{2})(\d{5})(\d{4})$/g,
                "($1) $2-$3"
              )}
              onChange={handleChange}
              type="tel"
              name="cellphone"
              text="Celular"
              width="50%"
              placeholder={"(  )"}
            />

            <Field
              required
              value={state.email}
              onChange={handleChange}
              type="email"
              name="email"
              text="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>

          <div className={styles.form_group}>
            <Field
              required
              value={state.title}
              onChange={handleChange}
              name="title"
              type="text"
              text="Cargo"
            />

            <Field
              required
              value={state.state}
              onChange={handleChange}
              type="address-state"
              name="state"
              text="Estado"
            />
          </div>

          <div className={styles.form_group}>
            <Field
              required
              value={state.city}
              onChange={handleChange}
              type="address-city"
              name="city"
              text="Cidade"
              width="70%"
            />

            <Field
              required
              value={state.street}
              onChange={handleChange}
              type="address-street"
              name="street"
              text="Rua"
            />
          </div>

          <div className={styles.form_group}>
            <Button type="submit" className={styles.submit_button}>
              gerar vCard
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Create;
