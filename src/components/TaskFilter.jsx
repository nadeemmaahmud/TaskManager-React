import React from 'react'

function TaskFilter({currentFilter, onFilterChange, countTask}) {
  return (
    <div className='flex justify-center flex-wrap gap-3 mb-6'>
      <button onClick={() => onFilterChange("all")} className={`px-4 py-1 rounded-full text-sm font-medium border transition ${currentFilter === "all" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
        All ({countTask.all})
      </button>
      <button onClick={() => onFilterChange("completed")} className={`px-4 py-1 rounded-full text-sm font-medium border transition ${currentFilter === "completed" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
        Completed ({countTask.completed})
      </button>
      <button onClick={() => onFilterChange("pending")} className={`px-4 py-1 rounded-full text-sm font-medium border transition ${currentFilter === "pending" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
        Pending ({countTask.pending})
      </button>
    </div>
  )
}

export default TaskFilter
