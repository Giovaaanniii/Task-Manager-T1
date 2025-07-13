import './App.css'
import { TaskList } from './components/TaskList/TaskList'
import { Routes, Route } from "react-router";

function App() {


  return (
    <div className='project-wrapper'>
         <Routes>
               <Route path="/" element={<TaskList />} /> 
         </Routes>

    </div>
  )
}

export default App
