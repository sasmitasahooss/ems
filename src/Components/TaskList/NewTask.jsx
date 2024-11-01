import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
        <div className='flex items-center px-5 py-5 justify-between'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='text-2l px-5 font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2 px-6'>{data.description}</p>
        <div className='mt-4'>
            <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
