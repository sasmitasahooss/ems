import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-5 h-100px justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] p-5 bg-red-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] p-5 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] p-5 bg-green-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] p-5 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
