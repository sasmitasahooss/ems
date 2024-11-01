import React, { useState, useEffect, useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

import { AuthContext } from './Context/AuthProvider.jsx'

const App = () => {

  const[user, setUser]=useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData]= useContext(AuthContext);
// useEffect(() => {
//   if(authData){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// }, [authData])

useEffect(() => {
 const loggedInUser = localStorage.getItem('loggedInUser')
 if(loggedInUser){
  const userData = JSON.parse(loggedInUser)
  setUser(userData.role)
  setLoggedInUserData(userData.data)
  // console.log(userData)
 }
},[])

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))  
      }
    }
    else{
      alert("invalid credentials");
    }
  }
  return (
    <>
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard changeUser={
        setUser}/>: (user== 'employee' ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>: null)}
    </>
  )
}

export default App

