import React, {useState,useEffect}from 'react';
import {getTodos} from '../api'
import TaskCard from './TaskCard'
import faker from 'faker'
import '../css/WorkerList.css'

const WorkerList = (props) =>{

    const[items, setItems] = useState([])

    useEffect(()=>{
        const fetchItems = async() =>{
            const todos = await getTodos()
            setItems(todos)
        }
        fetchItems()
    },[])

    const filteredTask = items.filter((todo,index) => {
        return (todo.TaskTitle.toLowerCase().includes(props.searchTask.toLowerCase()))
    })

    return(
        <div className="TaskHome">
            <div className="Tasklist">
                    {
                    filteredTask.map((todo,index) =>(
                        <TaskCard
                        key = {index}
                        avatar={faker.image.avatar()}
                        Title = {todo.TaskTitle}
                        description={todo.TaskDescription}
                        ExpiryDate={todo.ExpiryDate}
                        link={`/Detail/${todo._id}`}
                        link2={`/Delete/${todo._id}`}
                        />
                    ))}
                    </div>
        </div>
    )
}

export default WorkerList