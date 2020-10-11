import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import '../css/DeleteTask.css'
import {  Header, Icon } from 'semantic-ui-react'
import InputExample from './Input'
import Footerbar from './Footerbar'


const DeleteData = () =>{

    const match = useRouteMatch()
    const history = useHistory()

      const DeleteItem = () =>{
        
        fetch( 'http://localhost:8000/deleteItem/'+ match.params.id,{
            method: 'DELETE',
            header:{'Accept':'application/json',
           'Content-Type':'application/json'}
        })
        history.push("/WorkerTask")
      }

      const BacktoList = () => {
        history.push("/WorkerTask")
      }

      return(
          <div>
              <div className='DeleteTitle'>
              </div>
              <div className="Deleteform">
              <p>Are you sure to delete this task? Please confirm your operation again！</p>
              <div className='DeleteButton'>
              <button type="submit" onClick={DeleteItem} className="ui button" id='delete'>Delete</button>
              <button type="submit" onClick={BacktoList} className="ui button" id='back'>Back</button>
              </div>
              </div>
          </div>
      )
    
}

export default DeleteData