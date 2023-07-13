import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Badge  from '@mui/material/Badge';

const Header = () => {
  return (
    <>
        <Navbar bg="primary" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Add to Cart</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
              <Badge badgeContent={4} color="primary">
                <i className='fa-solid fa-cart-shopping text-light' style={{fontSize:25, cursor:'pointer'}}></i>
              </Badge>
          </Container>
        </Navbar>
    </>
  )
}

export default Header