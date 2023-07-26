import React,{useState} from "react";
import './styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink}  from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  Badge from "@mui/material/Badge";
import {  useSelector } from 'react-redux';
import { Table } from "react-bootstrap";


const Header = () => {

  const getData = useSelector((state) => state.CartReducers.carts);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
        <Navbar bg="dark" variant="dark" style={{height: "60px"}}>
          <Container>
            <NavLink href="#home" className="text-decoration-none text-light">Add to Cart</NavLink>
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-decoration-none text-light">Home</Nav.Link>
            </Nav>
            <Badge 
              badgeContent={getData.length} color="primary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:25, cursor:"pointer"}} />
            </Badge>
          </Container>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {
          getData.length ?
          <div className="card_details">
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurent Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getData.map((e) => {
                    return(
                      <>
                        <tr>
                          <td> 
                          <NavLink to={`./cart/${e.id}`}>
                              <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                          </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price :  ₹{e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p style={{color:"red", fontSize:20,cursor:"pointer"}}>
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}} >
                              <i className='fas fa-trash largetrash'></i>
                          </td>
                        </tr>
                      </>
                    )
                  })
                }
                <p className="text-center">Total : 300</p>
              </tbody>
            </Table>
          </div> :

          <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem", padding:10, position:"relative"}}>
              <i onClick={handleClose} className="fas fa-close smallclose" style={{position:"absolute", top:2,right:20, fontSize:23, cursor:"pointer"}}></i>
              <p>Your carts is empty</p>
              <img src="./cart.gif" alt="" className="emptycart_img" style={{width:"5rem", padding:10}}/>
          </div>
        }
      </Menu>
        </Navbar>
    </>
  )
}

export default Header;