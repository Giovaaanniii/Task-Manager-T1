import Button from "@mui/material/Button";
import s from "./TaskItem.module.css";
import { Link } from "react-router-dom";

export const TaskItem = () => {
  return (
    <div className={s.wrapper}>
      <div>
        
      </div>
      <h1>заголовок</h1>
      <p>описание</p>
      <div>
        <div>категория</div>
        <div>Статус</div>
        <div>Приоритет</div>
      </div>
      <Link to="/task/:id"><Button variant="contained">редактировать</Button></Link>
    </div>
  );
};
