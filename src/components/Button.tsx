import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

export function Button({ content, type = "submit", ...rest }: ButtonProps) {
  return (
    <button className={styles.button} type={type} {...rest}>
      {content}
      <PlusCircle size={20} />
    </button>
  );
}
