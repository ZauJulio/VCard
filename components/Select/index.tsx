import React from "react";
import Image from "../Image";

import styles from "./styles.module.scss";
import arrow_bottom from "../../public/static/assets/arrow_bottom.svg";

interface SelectProps {
  className?: string;
  value: string;
  options?: any[];
  selected: number;
  onChange: (value: number) => void;
}

function Select(props: SelectProps) {
  const handleChange = (index: number) => {
    props.onChange && props.onChange(index);
  };

  return (
    <div className={`${styles.select_container} ${props.className}`}>
      <span className={styles.value}>
        {props.value}
        <Image className={styles.expand_icon} src={arrow_bottom} alt="" />
      </span>

      <ul className={styles.options}>
        {props.options?.map((option, index) => (
          <span
            key={index}
            className={styles.option}
            onClick={() => handleChange(index)}
          >
            {option}
          </span>
        ))}
      </ul>
    </div>
  );
}

export default Select;
