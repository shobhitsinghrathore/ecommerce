import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import{FaShoppingCart, FaUser} from "react-icons/fa"
import logo from '../assets/logo.png'
import {LinkContainer} from "react-router-bootstrap"

function Header() {
  return (
    <div>
        <header>
      <Navbar bg="primary" varient="dark" expand="lg" collapseOnSelect >
            <Container>
              <LinkContainer to='/'>
            <Navbar.Brand>
                <img src={logo} alt="logo"/>
                Ecommerce</Navbar.Brand>
                </LinkContainer>
            <Navbar.Toggle aria-controls='basiv-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link><FaShoppingCart/></Nav.Link></LinkContainer>
                <LinkContainer to='/login'>
                <Nav.Link><FaUser/></Nav.Link></LinkContainer>
            </Nav>
            </Navbar.Collapse>
            </Container>
      </Navbar>
      </header>
    </div>
  )
}

export default Header
