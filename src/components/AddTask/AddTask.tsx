import TextField from "@mui/material/TextField";
import s from "./AddTask.module.css";
import { Category } from "./Category";
import { Status } from "./Status";
import { Priority } from "./Priority";
import Button from "@mui/material/Button";
import { useState } from "react";
import type { Task } from "./types/Task";

interface Props {
  onAddTask: (task: Task) => void;
}
export const AddTask = ({ onAddTask }: Props) => {

  const [task,setTask ] = useState<Task>({
    id: 0,
    name: "",
    description: "",
    category: "Test",
    status: "To Do",
    priority: "Low",
  });
  const handlerAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTask = ({
      ...task,
      id: Date.now()
  });
  onAddTask(newTask)
    setTask({
      id: 0,
      name: "",
      description: "",
      category: "Bug",
      status: "To Do",
      priority: "Low"
    });
  };

  return (
    <form className={s.wrapper}>
      <h1 className={s.text}>Добавить задачу</h1>
      <div className={s.fields}>
        <TextField label="Задача" value={task.name} onChange={(e) => setTask({...task, name: e.target.value})} />
        <TextField label="Описание задачи" multiline rows={5}  value={task.description} onChange={(e) => setTask({...task, description: e.target.value})}/>
      </div>  
      <div className={s.selects}>
          <Category 
          value={task.category}
          onChange={(newCategory) => setTask({...task, category: newCategory})}
        />
        <Status    value={task.status}
          onChange={(newStatus) => setTask({...task, status: newStatus})} />
        <Priority value={task.priority}
          onChange={(newPriority) => setTask({...task, priority: newPriority})} />
      </div>
      <div className={s.button}>
        <Button variant="contained" onClick={handlerAddTask}>
          Добавить запись
        </Button>
      </div>
    </form>
  );
};
