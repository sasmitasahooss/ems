import React, { useState, useEffect, useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

import AuthProvider, { AuthContext } from './Context/AuthProvider.jsx'

const App = () => {

  const[user, setUser]=useState(null);
  const authData= useContext(AuthContext);
useEffect(() => {
  if(authData){
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  }
}, [authData])


  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>email==e.email && e.password==password)){
      setUser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
    }
    else{
      alert("invalid credentials");
    }
  }
  return (
    <>
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    </>
  )
}

export default App
