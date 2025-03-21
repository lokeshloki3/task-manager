import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  return (
    <div>
      <h1 className='text-center m-6 text-5xl'>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
