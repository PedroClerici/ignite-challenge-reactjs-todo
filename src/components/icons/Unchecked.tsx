import { SVGProps } from "react";

import styles from "./Unchecked.module.css";

export function Unchecked(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25em"
      height="1.25em"
      fill="var(--blue-400)"
      {...props}
      className={styles.unchecked}
    >
      <path
        d="M9.48 16.426a7.41 7.41 0 1 0 0-14.82 7.41 7.41 0 0 0 0 14.82Z"
        opacity="0"
      />
      <path d="M9.464 1.86A7.14 7.14 0 1 1 2.324 9a7.168 7.168 0 0 1 7.14-7.14Zm0-1.587a8.727 8.727 0 1 0 .072 17.454A8.727 8.727 0 0 0 9.464.273Z" />
    </svg>
  );
}
