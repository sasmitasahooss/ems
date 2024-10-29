import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>Sasmita</span> </h1>
      <button className='bg-red-500 text-lg font-medium p-1 rounded-md'>Log out</button>
    </div>
  )
}

export default Header
