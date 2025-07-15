import { Link } from "react-router-dom";
import type { Task } from "../../app/types/Task";
import { TaskItem } from "../../widgets/TaskItem/TaskItem";
import s from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <>
      <div className={s.addTask}>
        <Link to="/task/new">добавить задачу </Link>
      </div>

      <div className={s.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};
