import React from 'react'
import {CheckSquare} from 'lucide-react'

function AppHeader() {
  return (
    <header className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
            <CheckSquare className='h-8 w-8 text-blue-500'/>
            <h1 className='text-2xl font-bold text-gray-800'>Task Manager</h1>
        </div>
        
        <p className='text-sm text-gray-500'>Manage your tasks with ease</p>
    </header>
  )
}

export default AppHeader
