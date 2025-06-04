import React, { useEffect, useState } from 'react'
import AppHeader from './components/AppHeader'
import TaskForm from './components/TaskForm'
import TaskItems from './components/TaskItems'
import TaskFilter from './components/TaskFilter'

function App() {
  const [tasks, setTask] = useState([])
  const [filter, setFilter] = useState("all")

  const handleAddTask = (newtask) => {
    const updatedTask = [...tasks, newtask]
    setTask(updatedTask)

    localStorage.setItem("tasks", JSON.stringify(updatedTask))
  }

  const handleComplete = (id) => {
    const updatedtask = tasks.map((task) => (
      task.id === id ? {...task, completed: !task.completed} : task
    ))
    setTask(updatedtask)
    localStorage.setItem("tasks", JSON.stringify(updatedtask))
  }

  const handleDelete = (id) => {
    const updatedtask = tasks.filter((task) => task.id !== id)
    setTask(updatedtask)
    localStorage.setItem("tasks", JSON.stringify(updatedtask))
  }

  const filteredTask = tasks.filter((task) => {
    if(filter === "completed") return task.completed
    if(filter === "pending") return !task.completed
    return true
  })

  const countTask = {
    all: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length
  }

  useEffect(() => {
    const storeTask = JSON.parse(localStorage.getItem(tasks)) || []
    setTask(storeTask)
  }, [])

  return (
    <div className='min-h-screen bg-gray-200 py-8 px-4 sm:px-6'>
      <div className='max-w-3xl mx-auto'>
        <AppHeader/>
        <TaskForm onAddTask = {handleAddTask}/>
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} countTask={countTask}/>
        <TaskItems tasks={filteredTask} onCompleteTask={handleComplete} onDeleteTask={handleDelete}/>
      </div>
    </div>
  )
}

export default App
