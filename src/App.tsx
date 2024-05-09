import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";

import styles from "./App.module.css";

interface Task {
  content: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
  ]);

  const [newTask, setNewTask] = useState<Task>({ content: "", isDone: false });

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask((state) => ({
      content: event.target.value,
      isDone: state.isDone,
    }));
  }

  function handleCreateNewTask(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setTasks((state) => [...state, newTask]);

    setNewTask((state) => ({
      content: "",
      isDone: state.isDone,
    }));
  }

  function handleDeleteTask(taskContent: string) {
    setTasks((state) => state.filter((task) => task.content !== taskContent));
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form className={styles.taskInputForm}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTask.content}
            onChange={handleNewTaskChange}
          />
          <Button content="Criar" onClick={handleCreateNewTask} />
        </form>

        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              content={task.content}
              isDone={task.isDone}
              onDeleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
