import { signOut } from 'firebase/auth';
import React from 'react'
import { Container, NavDropdown, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from  "react-router-dom"
import { auth } from '../../firebase-config';
import { setUserInfo } from '../../redux/authSlice';

const Header = () => {
  const {userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () =>{
    signOut(auth).then(() =>{
      dispatch(setUserInfo({}));
    }).catch((error)=> {
      console.log(error)
    })
  }
  return (
    <>
        <Navbar expand="lg" bg= "dark" variant='dark'>
        <Container>
            <Navbar.Brand href="#home">Book Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to = "/dashboard" className='nav-link'>Dashboard</Link>
                <Link to = "/admin-signup" className='nav-link'>Signup</Link>
                {userInfo.uid?(<Link to = "#" onClick={handleLogout} className='nav-link'>Log out</Link>):
                (<Link to = "/login" className='nav-link'>Login</Link>)}
                
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default Header