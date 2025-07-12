import Button from "@mui/material/Button"

export const TaskItem = () => {
    return(
        <>
        <h1>заголовок</h1>
        <p>описание</p>
        <div>
            <div>категория</div>
            <div>Статус</div>
            <div>Приоритет</div>
        </div>
        <Button variant="contained">Contained</Button>
        </>
    )
}