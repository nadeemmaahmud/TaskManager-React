import React from 'react'
import { CheckCircle, Circle, Trash2 } from 'lucide-react'

function TaskList({task, onCompleteTask, onDeleteTask}) {
  const formatDate = new Date(task.created_at).toLocaleDateString("en-US", {
    month: 'short',
    day: 'numeric',
    timezone: 'Asia/Dhaka'
  })

  return (
    <div className={`flex justify-between items-start bg-white p-4 rounded-md shadow-sm border-l-4
    ${task.completed ? "border-green-500 opacity-75" : "border-gray-300"} transition-all hover:shadow`}>
      <div className='flex-1 items-start gap-3'>
        <button onClick={() => onCompleteTask(task.id)}
        className='mt-1 flex-shrink-0 transition-transform duration-200 hover:scale-110 focus:outline-none'
        area-label= {task.completed ? "Mark as imcomplete" : "Mark as complete"}>
        {task.completed ? (<CheckCircle className='h-5 w-5 text-green-500'/>) : (<Circle className='h-5 w-5 text-gray-400'/>)}</button>
      </div>
      <div className='flex-11/12'>
        <h3 className={`text-base font-medium ${task.completed ? "line-through" : "text-gray-800"}`}>{task.title}</h3>
        <div className='flex flex-wrap gap-2 mt-2 text-xs text-gray-500'>
          <span className='bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full'>
            {task.category}
          </span>
          <span className={`px-2 py-0.5 rounded-full ${task.priority === "High" ? "bg-red-100 text-red-600" : task.priority === "Medium" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}`}>
            {task.priority} Priority
          </span>
          <span className='bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full'>
            {formatDate}
          </span>
          <button onClick={() => onDeleteTask(task.id)} className='text-gray-400 hover:text-gray-500 transition-colors duration-200 focus: outline-none' aria-label="Delete task" title="Delete Task"><Trash2 className='h-5 w-5 text-red-500'/></button>
        </div>
      </div>
    </div>
  )
}

export default TaskList
