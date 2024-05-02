import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

export function Input({
  type = "text",
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} type={type} {...rest} />;
}
