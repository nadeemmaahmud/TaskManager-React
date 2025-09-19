import { PlusCircle } from 'lucide-react'
import React, { useState } from 'react'

function TaskForm({onAddTask}) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Personal")
  const [priority, setPriority] = useState("Medium")
  const [error, setError] = useState("")

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handlePriority = (e) => {
    setPriority(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(title.trim() === ""){
        setError('Title is required!')
        return
    }

    const newtask = {
        id: crypto.randomUUID(),
        title: title.trim(),
        category: category,
        priority: priority,
        completed: false,
        created_at: new Date().toISOString(),
    }

    onAddTask(newtask)
    setTitle("")
    setCategory("Personal")
    setPriority("Medium")
    setError('')
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Add Your Task Here</h2>
      <hr/><br/>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
            <label htmlFor='title' className='block mb-1'>Task Title</label>
            <input id='title' value={title} onChange={handleTitle} type='text' className='w-full px-4 py-2 border border-gray-300 rounded' placeholder='Enter you task title'/> 
        </div>
        {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}

        <div>
            <label htmlFor='category' className='block mb-1'>Category</label>
            <select id='category' value={category} onChange={handleCategory} className='w-full px-4 py-2 border border-gray-300 rounded'>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <div>
            <label htmlFor='priority' className='block mb-1'>Priority</label>
            <select id='priority' value={priority} onChange={handlePriority} className='w-full px-4 py-2 border border-gray-300 rounded'>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </div>

        <button type='submit' className='w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center'><PlusCircle className='h-4 w-4 mr-2'/>Add Task</button>
      </form>
    </div>
  )
}

export default TaskForm
