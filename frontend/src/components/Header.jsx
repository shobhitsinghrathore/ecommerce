import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import{FaShoppingCart, FaUser} from "react-icons/fa"
import logo from '../assets/logo.png'

function Header() {
  return (
    <div>
        <header>
      <Navbar bg="primary" varient="dark" expand="lg" collapseOnSelect >
            <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="logo"/>
                Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls='basiv-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <Nav.Link href = "/cart"><FaShoppingCart/></Nav.Link>
                <Nav.Link href="/login"><FaUser/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
      </Navbar>
      </header>
    </div>
  )
}

export default Header
