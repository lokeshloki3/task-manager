import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (
    <div>
      <h1 className='text-center m-6 text-5xl'>Task Manager</h1>
      <TaskForm />
      <FilterButtons />
      <ThemeToggle />
      <TaskList />
    </div>
  )
}

export default App
