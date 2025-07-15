import Button from "@mui/material/Button";
import s from "./TaskItem.module.css";
import { Link } from "react-router-dom";
import type { Task } from "../../app/types/Task";

interface TaskItemProps {
  task: Task;
}
export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.textFields}>
        <h1>{task.name}</h1>
        <p>{task.description}</p>
      </div>

      <div className={s.items}>
        <div className={s.category}>{task.category}</div>
        <div className={s.status}>{task.status}</div>
        <div className={s.priority}>{task.priority}</div>
      </div>
      <div className={s.edit}>
        <Link to={`/task/${task.id}`}>
          <Button variant="contained">редактировать</Button>
        </Link>
      </div>
    </div>
  );
};
