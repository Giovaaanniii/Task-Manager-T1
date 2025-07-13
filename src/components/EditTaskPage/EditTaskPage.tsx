import { Link, useParams } from "react-router-dom";
import type { Task } from "../AddTask/types/Task";
import TextField from "@mui/material/TextField";
import s from "../AddTask/AddTask.module.css";
import Button from "@mui/material/Button";
import { Priority } from "../AddTask/Priority";
import { Status } from "../AddTask/Status";
import { Category } from "../AddTask/Category";
import { useEffect, useState } from "react";
import style from "./EditTaskPage.module.css"
interface EditTaskPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const EditTaskPage = ({ tasks, setTasks }: EditTaskPageProps) => {
  const { id } = useParams<{ id: string }>();
  const [editedTask, setEditedTask] = useState<Task | null>(null);

  useEffect(() => {
    const foundTask = tasks.find((t) => t.id === Number(id));
    if (foundTask) {
      setEditedTask(foundTask);
    }
  }, [id, tasks]);

  const handleSave = () => {
    if (!editedTask) return;

    setTasks(tasks.map((t) => (t.id === editedTask.id ? editedTask : t)));
  };

  if (!editedTask) {
    return <div>Задача не найдена</div>;
  }

  return (
    <div >
      <div className={style.name}>
    <h2 >Редактирование задачи #{id}</h2>
      </div>
      
      <form className={s.wrapper}>
        <div className={s.fields}>
          <TextField
            label="Задача"
            value={editedTask.name}
            onChange={(e) =>
              setEditedTask({
                ...editedTask,
                name: e.target.value,
              })
            }
          />
          <TextField
            label="Описание задачи"
            multiline
            rows={5}
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({
                ...editedTask,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className={style.selects}>
          <Category
            value={editedTask.category}
            onChange={(newCategory) =>
              setEditedTask({
                ...editedTask,
                category: newCategory,
              })
            }
          />
          <Status
            value={editedTask.status}
            onChange={(newStatus) =>
              setEditedTask({
                ...editedTask,
                status: newStatus,
              })
            }
          />
          <Priority
            value={editedTask.priority}
            onChange={(newPriority) =>
              setEditedTask({
                ...editedTask,
                priority: newPriority,
              })
            }
          />
        </div>
        <div className={s.button}>
          <Link to='/'>
          <Button variant="contained" onClick={handleSave}>
            Сохранить изменения
          </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
