import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'


const Navigation = ({openModal}) => {


  return ( 
    <>

      <Navbar className='navbar'>
        <Navbar.Brand className='logoDetail'href="/">Soie</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/butters">Mantecas</Nav.Link>
          <Nav.Link href="/address">Donde estamos</Nav.Link>
        </Nav>
        <Nav.Link onClick={()=> openModal()} className="material-icons">favorite_border</Nav.Link>
      </Navbar>
  
    </>
  );
}
 
export default Navigation;