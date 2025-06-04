import React from 'react'
import TaskList from './TaskList'
import { Clipboard } from 'lucide-react'

function TaskItems({tasks, onCompleteTask, onDeleteTask}) {
  if (tasks.length === 0){
    return (
        <div className='bg-white rounded shadow p-8 text-center'>
          <Clipboard className='mx-auto h-12 w-12 text-gray-400'/> 
          <h3 className='mt-2 text-lg font-medium text-gray-900'>No Task Found.....</h3>
          <p className='mt-1 text-gray-500'>Add a new task to get started</p>
        </div>
    )
  } else {
    return (
      <div className='space-y-1'>
          {tasks.map((task) => {
            return (<TaskList key={task.id} task={task} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask}/>)
          })}
      </div>
    )
  }
}

export default TaskItems
