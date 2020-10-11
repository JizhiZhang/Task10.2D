import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import  '../css/NavBar.css'

const Task = (props) =>{

    return(
    <div>
    <nav className = 'Navbar'>
    <Navbar style={{background:"#99CCCC", color:"black"}}>
    <Navbar.Brand>iCrowdTask</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">New Requester Task</Nav.Link>
      <Nav.Link href="/WorkerTask">WorkerTask</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </nav>
    </div>
    )
}

export default Task