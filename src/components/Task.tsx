import { useState } from "react";
import { Trash } from "@phosphor-icons/react";
import { Checked } from "./icons/Checked";
import { Unchecked } from "./icons/Unchecked";

import styles from "./Task.module.css";

interface TaskProps {
  isDone: boolean;
  content: string;
  onDeleteTask: (taskContent: string) => void;
}

export function Task({ content, isDone = false, onDeleteTask }: TaskProps) {
  const [isTaskFinished, setIsTaskFinished] = useState(isDone);

  function handleToggleTaskState() {
    setIsTaskFinished((state) => {
      return !state;
    });
  }

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={`${styles.task} ${isTaskFinished ? styles.finished : ""}`}>
      <button onClick={handleToggleTaskState}>
        {isTaskFinished ? <Checked /> : <Unchecked />}
      </button>
      <p onClick={handleToggleTaskState}>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
