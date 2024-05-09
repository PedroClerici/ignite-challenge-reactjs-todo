import rocket from "../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Logotipo do Ignite Todo" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
