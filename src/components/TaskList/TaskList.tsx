import { TaskItem } from "./TaskItem/TaskItem"
import s from "./TaskList.module.css";

export const TaskList = ()=>{
    return(
        <div className={s.list}>
      <TaskItem/>
        </div>
    )
}