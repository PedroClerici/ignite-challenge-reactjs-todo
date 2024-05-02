import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form className={styles.taskInputForm}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button content="Criar" />
        </form>
      </main>
    </>
  );
}
