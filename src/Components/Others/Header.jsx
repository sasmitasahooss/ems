import React, {useState, useEffect} from 'react'

const Header = (props) => {
  const [userName, setUserName] = useState('')
  // useEffect(() => {
  //   if (!data) {
  //     setUserName('Admin');
  //   } else {
  //     setUserName(data.firstName);
  //   }
  // }, [data]); 

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>{userName}</span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium p-1 rounded-md'>Log out</button>
    </div>
  )
}

export default Header
