import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

import scratch_left from "../../../public/static/assets/left_scratchs.svg";
import scratch_right from "../../../public/static/assets/right_scratchs.svg";

function Scratches() {
  return (
    <>
      <div className={styles.scratch_left}>
        <Image src={scratch_left} alt="scratch_left"></Image>
      </div>

      <div className={styles.scratch_right}>
        <Image src={scratch_right} alt="scratch_right"></Image>
      </div>
    </>
  );
}

export default Scratches;
