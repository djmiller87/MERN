import './App.css';
import React, { useState } from 'react';
import Task from './components/TaskDisplay';
import TaskForm from './components/TaskForm';
import TaskDisplay from './components/TaskDisplay';

function App(props) {
  const [currentTasks, setCurrentTasks] = useState([]);


return (
  <div className='mx-auto col-6'>
      <TaskForm currentTasks={currentTasks} setCurrentTasks={setCurrentTasks} />
      {
          currentTasks.map((oneTask) => {
              return <TaskDisplay taskString={oneTask.content} currentTasks={currentTasks} setCurrentTasks={setCurrentTasks} id={oneTask.id}/>
          })
      }
  </div>
);
}

export default App;


// 1. create form that takes in task and asssign it an id.
// 2. create checkbox that takes in that id.
