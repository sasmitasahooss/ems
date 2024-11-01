import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-4 rounded mt-5'>
      <div className='w-full bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed Task</h5>
        <h5 className='w-1/5'>Failed Task</h5>
      </div>
      <div>
      {userData.map((elem, idx)=>{
        return(
        <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2>{elem.firstName}</h2>
        <h3>{elem.taskNumbers.new}</h3>
        <h5>{elem.taskNumbers.accept}</h5>
        <h5>{elem.taskNumbers.completed}</h5>
        <h5>{elem.taskNumbers.failed}</h5>

      </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default AllTask
