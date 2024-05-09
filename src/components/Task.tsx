import { useState } from "react";
import { Trash } from "@phosphor-icons/react";
import { Checked } from "./icons/Checked";
import { Unchecked } from "./icons/Unchecked";

import styles from "./Task.module.css";

interface TaskProps {
  id: number;
  isDone: boolean;
  content: string;
  onDeleteTask: (taskId: number) => void;
  onTaskStateChange: (taskId: number, taskState: boolean) => void;
}

export function Task({
  id,
  content,
  isDone = false,
  onDeleteTask,
  onTaskStateChange,
}: TaskProps) {
  const [isTaskFinished, setIsTaskFinished] = useState(isDone);

  function handleToggleTaskState() {
    onTaskStateChange(id, !isTaskFinished);

    setIsTaskFinished((state) => {
      return !state;
    });
  }

  function handleDeleteTask() {
    onDeleteTask(id);
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
