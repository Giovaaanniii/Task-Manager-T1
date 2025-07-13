import TextField from "@mui/material/TextField";
import s from "./AddTask.module.css";
import { Category } from "./Category";
import { Status } from "./Status";
import { Priority } from "./Priority";
import Button from "@mui/material/Button";

export const AddTask = () => {
  return (
    <form className={s.wrapper}>
      <h1 className={s.text}>Добавить задачу</h1>
      <div className={s.fields}>
        <TextField
          label="Задача"
        />
        <TextField  label="Описание задачи" multiline rows={5} />
      </div>
      <div className={s.selects}>
        <Category/>
        <Status/>
        <Priority/>
      </div>
      <div className={s.button}>
        <Button variant="contained">Добавить запись</Button>
      </div>
    </form>
  );
};
