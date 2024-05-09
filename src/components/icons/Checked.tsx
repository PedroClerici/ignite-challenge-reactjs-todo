import { SVGProps } from "react";

import styles from "./Checked.module.css";

export function Checked(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25em"
      height="1.25em"
      fill="none"
      {...props}
      className={styles.checked}
    >
      <path
        fill="#5E60CE"
        d="M9.48 16.426a7.41 7.41 0 1 0 0-14.82 7.41 7.41 0 0 0 0 14.82Z"
      />
      <path
        fill="#5E60CE"
        d="M9.464 1.86A7.14 7.14 0 1 1 2.324 9a7.168 7.168 0 0 1 7.14-7.14Zm0-1.587a8.727 8.727 0 1 0 .072 17.454A8.727 8.727 0 0 0 9.464.273Z"
      />
      <path
        fill="#F2F2F2"
        d="M12.93 6.342 8.6 10.674 6.116 8.192l-.836.835L8.6 12.346l5.168-5.168-.836-.836Z"
      />
    </svg>
  );
}
