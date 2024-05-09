import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";
import { TaskPlaceholder } from "./components/TaskPlaceholder";

import styles from "./App.module.css";

interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks")!)
      : [],
  );

  const [newTask, setNewTask] = useState<Task>({
    id: Math.random(),
    content: "",
    isDone: false,
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask((state) => ({
      id: state.id,
      content: event.target.value,
      isDone: state.isDone,
    }));
  }

  function handleCreateNewTask(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!newTask.content) {
      return;
    }

    setNewTask((state) => ({
      id: Math.random(),
      content: "",
      isDone: state.isDone,
    }));

    setTasks((state) => [...state, newTask]);
  }

  function handleDeleteTask(taskId: number) {
    setTasks((state) => state.filter((task) => task.id !== taskId));
  }

  function handleTaskStateChange(taskId: number, taskState: boolean) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === taskId) {
          task.isDone = taskState;
        }

        return task;
      }),
    );
  }

  const isNewTaskContentEmpty = newTask.content === "";

  const finishedTasks = tasks.reduce(
    (acc, task) => (task.isDone ? acc + 1 : acc),
    0,
  );

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form className={styles.taskInputForm}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTask.content}
            onChange={handleNewTaskChange}
            required
          />
          <Button
            content="Criar"
            onClick={handleCreateNewTask}
            disabled={isNewTaskContentEmpty}
          />
        </form>

        <section className={styles.tasksInfo}>
          <div>
            <h3>Tarefas Criadas</h3>
            <span>{tasks.length}</span>
          </div>
          <div>
            <h3>Concluídas</h3>
            <span>
              {tasks.length} de {finishedTasks}
            </span>
          </div>
        </section>

        <div className={styles.tasksContainer}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                onDeleteTask={handleDeleteTask}
                onTaskStateChange={handleTaskStateChange}
              />
            ))
          ) : (
            <TaskPlaceholder />
          )}
        </div>
      </main>
    </>
  );
}
