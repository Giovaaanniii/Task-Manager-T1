import './App.css'
import { EditTaskPage } from './components/EditTaskPage/EditTaskPage';
import { TaskList } from './components/TaskList/TaskList'
import { Routes, Route } from "react-router";
import { useState } from 'react';
import type { Task } from './components/AddTask/types/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <div className='project-wrapper'>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
        <Route path="/task/:id" element={<EditTaskPage tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </div>
  );
}

export default App
