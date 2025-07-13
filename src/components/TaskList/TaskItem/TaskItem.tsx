import Button from "@mui/material/Button";
import s from "./TaskItem.module.css";
import { Link } from "react-router-dom";
import type { Task } from "../../AddTask/types/Task";

interface TaskItemProps {
  task: Task;
}
export const TaskItem = ({task}: TaskItemProps) => {
  return (
    <div className={s.wrapper}>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <div>
        <div>{task.category}</div>
        <div>{task.status}</div>
        <div>{task.priority}</div>
      </div>
     <Link to={`/task/${task.id}`}><Button variant="contained">редактировать</Button></Link>
    </div>
  );
};
