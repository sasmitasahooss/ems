import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-5 h-100px justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] p-5 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.new}</h2>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] p-5 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-3xl font-semibold'>Active Task</h3>
      </div>

      <div className='rounded-xl w-[45%] p-5 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-3xl font-semibold'>Completed Task</h3>
      </div>

      <div className='rounded-xl w-[45%] p-5 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-3xl font-semibold'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
