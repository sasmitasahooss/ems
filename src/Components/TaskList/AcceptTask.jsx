import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
    <div className='flex items-center px-5 py-5 justify-between'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='text-2l px-5 font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2 px-6'>{data.description}</p>
    <div className='flex justify-between mt-4'>
    <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
    <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
  </div>
  )
}

export default AcceptTask
