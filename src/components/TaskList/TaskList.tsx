import { AddTask } from "../AddTask/AddTask";
import { TaskItem } from "./TaskItem/TaskItem";
import s from "./TaskList.module.css";

export const TaskList = () => {
  return (
    <>
    <div className={s.addTask}>
        <AddTask />
    </div>
    
      <div className={s.list}>
        <TaskItem />
      </div>
    </>
  );
};
