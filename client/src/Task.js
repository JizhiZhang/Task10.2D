import WorkerList from './component/WorkerList'
import React, {useState}from 'react';
import InputExample from './component/Input';
import NavBar from './component/NavBar';
import './css/Task.css'

function TaskListView() {

  const onSearchChange = (e) =>{
    setSearchTerm(e.target.value)
}

const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className='Task'>
      
            <NavBar />
            <h1 className='ListTile'>TaskList</h1>
         <div>
        <InputExample labelid='Searchlabel' inputid='Searchinput' classname='Search' type="text" text="Search Task by Title" onChange={onSearchChange} value={searchTerm}/>
        </div>
        <WorkerList searchTask={searchTerm}/>
    </div>
  );
}

export default TaskListView;