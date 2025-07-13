import { useState } from "react";
import { AddTask } from "../AddTask/AddTask";
import type { Task } from "../AddTask/types/Task";
import { TaskItem } from "./TaskItem/TaskItem";
import s from "./TaskList.module.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
};
  return (
    <>
    <div className={s.addTask}>
        <AddTask onAddTask={handleAddTask} />
    </div>
    
     <div className={s.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};
