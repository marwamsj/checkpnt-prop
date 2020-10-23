import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

function Head() {
    return (
        <div>
             <Navbar bg="dark" variant="dark" >
             <Nav className="mr-auto" style={{marginLeft:'4%'}}>
              <Nav.Link href="#">Chat Room</Nav.Link>
            <Nav.Link href="#">Profle</Nav.Link>
             </Nav>
             <Nav style={{marginRight:'4%'}}>
             <Nav.Link href="#">Logout</Nav.Link>
              </Nav>
  </Navbar>
        </div>
    )
}

export default Head
