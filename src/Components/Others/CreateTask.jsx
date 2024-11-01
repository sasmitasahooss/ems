// import {localStorage} from '../utils/localStorage'

import React, {useContext, useState} from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewTask] = useState({});
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(taskTitle, taskDescription, taskDate,category);
    // setTaskTitle('');
    // setTaskDescription('');
    // setTaskDate('');
    // setAssignTo('');
    // setCategory('');
    setNewTask({taskTitle, taskDescription, taskDate,category, active:false,new:true, failed:false, completed:false});
    const data = userData;
    
    data.forEach((elem) => {
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask);
        elem.taskNumbers.newTask= elem.taskNumbers.newTask+1;
      }
    })
    setUserData(data);
    console.log(data)
    
    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={submitHandler} className="flex w-full items-start justify-between m-5">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input value={taskTitle} onChange={(e)=>{
                setTaskTitle(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="make a ui design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input value={taskDate} onChange={(e)=>{
                setTaskDate(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"  type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input value={assignTo} onChange={(e)=>{
                setAssignTo(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"  type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input value={category} onChange={(e)=>{
                setCategory(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"  type="text" placeholder="design,dev,etc" />
            </div>
            
          </div>
          <div className="w-2/5 flex-col items-start">
              <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
              <textarea value={taskDescription} onChange={(e)=>{
                setTaskDescription(e.target.value)
              }} className="w-full h-4/5 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" name="" id=""></textarea>
              <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-2 w-full">Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
