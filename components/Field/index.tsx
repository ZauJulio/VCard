import React from "react";

import styles from "./styles.module.scss";

interface FieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  width?: string;
  text?: string;
}

function Field(props: FieldProps) {
  const { className, text, width, ...rest } = props;

  return (
    <label
      className={`${styles.field} ${className}`}
      style={{ width: width ?? "max" }}
    >
      <span className={styles.labelText}>{text}</span>
      <input className={styles.input} {...rest} />
    </label>
  );
}

export default Field;
