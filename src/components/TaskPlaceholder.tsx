import clipboard from "../assets/clipboard.svg";

import styles from "./TaskPlaceholder.module.css";

export function TaskPlaceholder() {
  return (
    <div className={styles.taskPlaceholder}>
      <img src={clipboard} alt="prancheta" />
      <div>
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
