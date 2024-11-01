import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex items-center px-5 py-5 justify-between'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>19 Oct 2024</h4>
        </div>
        <h2 className='text-2l px-5 font-semibold'>Make a frontend project</h2>
        <p className='text-sm mt-2 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugit vero, aspernatur fuga id porro.</p>
        <div className='mt-2'>
            <button>Complete</button>
        </div>
      </div>
  )
}

export default FailedTask
