import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getTodo } from "../api";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const TaskDetail = () =>{

    const match = useRouteMatch()
    const [todo, setTodo] = useState([])
    const history = useHistory()

    
  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id)
      setTodo(todo)
    }
    fetchTodo()
  }, []);

  const GoBack = () => {
    history.push("/WorkerTask")
  }


      return(
          <div >
              <div className='DetailTitle'>
                  <h2>Task Detail</h2>
              </div>
              <Table striped bordered hover variant="dark" className="Detail Table" style={{background:"#99CCCC", border:"#99CCCC", color:"black"}}>
  <thead>
  <tr>
      <th>#ID</th>
      <th>{todo._id}</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>TaskType</td>
      <td>{todo.TaskType}</td>
    </tr>
  <tr>
      <td>TaskTitle</td>
      <td>{todo.TaskTitle}</td>
    </tr>
    <tr>
      <td>TaskDescription</td>
      <td>{todo.TaskDescription}</td>
    </tr>
    <tr>
      <td>Expiry Date</td>
      <td>{todo.ExpiryDate}</td>
    </tr>
    <tr>
      <td>Require Master Workers</td>
      <td>{todo.isRequire}</td>
    </tr>
    <tr>
      <td>Reward per response</td>
      <td>{todo.Reward}</td>
    </tr>
      <tr>
      <td>Number of workers</td>
      <td>{todo.Numbers}</td>
    </tr>
  </tbody>
</Table>
<div className='detailbutton'>
                  <button type='submit' className="ui button" onClick={GoBack}>Back</button>
        </div>
          </div>
      )
    
}

export default TaskDetail