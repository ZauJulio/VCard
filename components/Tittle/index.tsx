import React from "react";
import { useRouter } from "next/router";

import { setOpacity } from "../../utils";

import { colors } from "../../styles/vars";
import styles from "./styles.module.scss";

interface TittleProps {
  className?: string;
  color?: string;
}

function Tittle(props: TittleProps) {
  const router = useRouter();
  const color = props.color || colors.blue;

  return (
    <div
      className={`${styles.tittle} ${props.className}`}
      onClick={() => router.push("/home")}
    >
      <h1 style={{ color: color }}>vCard</h1>
      <h2>generator</h2>
      <style>
        {`h2 { 
            -webkit-text-stroke: 2px ${color};
            background-image: linear-gradient(
              0deg,
              ${color},
              ${setOpacity(color, 0.75)} 30%,
              ${setOpacity(color, 0.25)} 20%,
              transparent 50%
            );
          }`}
      </style>
    </div>
  );
}

export default Tittle;
