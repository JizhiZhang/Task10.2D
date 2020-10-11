import React from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskCard = (props) =>
{

    return (
    <div className='Card'>
<Card style={{ width: '18rem' }} bg={'light'} border="warning">
  <Card.Img variant="top" src={props.avatar} width="286px" height="180px"/>
  <Card.Body>
    <Card.Title>{props.Title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">ExpiryDate:{props.ExpiryDate}</Card.Subtitle>
    <Card.Text>
    {props.description}
    </Card.Text>
    <Link to={props.link} id='link'>More</Link>
    <Link to={props.link2}>Delete</Link>
  </Card.Body>
</Card>
    </div>
    )
}

export default TaskCard