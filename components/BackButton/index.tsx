import React from "react";
import { useRouter } from "next/router";

import Image from "../Image";
import Button, { ButtonProps } from "../Button";

import styles from "./styles.module.scss";

import back_button from "../../public/static/assets/back_button.svg";

interface BackButtonProps extends ButtonProps {
  path?: string;
}
function BackButton({ className, path, ...rest }: BackButtonProps) {
  const { push, back } = useRouter();

  return (
    <Button
      className={`${styles.button} ${className}`}
      onClick={() => {
        path ? push(path) : back();
      }}
      {...rest}
    >
      <Image src={back_button} alt="Back" className={styles.button_img} />
    </Button>
  );
}

export default BackButton;
