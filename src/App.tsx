import { Header } from "./components/Header";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}></main>
    </>
  );
}
