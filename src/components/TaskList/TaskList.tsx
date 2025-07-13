import { AddTask } from "../AddTask/AddTask";
import type { Task } from "../AddTask/types/Task";
import { TaskItem } from "./TaskItem/TaskItem";
import s from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList = ({ tasks, setTasks }: TaskListProps) => {;
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
