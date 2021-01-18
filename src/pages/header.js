import React from 'react';
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
const Header = () => {

  return (
    <>
      <Navbar bg="black" variant="light ">
        <Nav className="navbar navbar-expand-lg  ">
          <Link className="nav-item mx-3" to="/">Home</Link>&nbsp;
          <Link className="nav-item mx-3" to="/products">Prints</Link>&nbsp;
          <Link className="nav-item mx-3" to="/Artists">Artists</Link>&nbsp;
          <Link className="cart-icon mx-3" to="/Cart">
            <ShoppingBasketOutlinedIcon /></Link>&nbsp;
        </Nav>
      </Navbar>
    </>
  )
}


export default Header
