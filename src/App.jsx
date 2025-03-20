import './App.css'
import { useState } from 'react';

function App() {

  const [addTask, setAddTask] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();

    if (addTask.trim() === "") {
      return;
    }
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Toggle button</p>
      <form onSubmit={handleAddTask}>
        <input
          type='text'
          placeholder='Add task'
          value={addTask}
          onChange={(event) => setAddTask(event.target.value)}
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default App
