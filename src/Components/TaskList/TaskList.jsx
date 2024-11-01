import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data)
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-4 flex-nowrap w-full py-5 mt-1'>
      {data.tasks.map((elem, idx)=>{
        if(elem.accept){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.new){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}

    </div>
  )
}

export default TaskList
