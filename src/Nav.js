import React from 'react';
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigate extends React.Component{
    render(){
        return(
            //<img src={logo} alt='' responsive />
            <Navbar className='font-weight-bold' style={{backgroundColor: '#fef200',fontFamily: 'calibri'}}>
                <Container>
                <Navbar.Brand>
                    <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Product</Nav.Link>
                        <Nav.Link href="#home">Our Store</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                </Container>
            </Navbar>
   
        );
    }
}

export default Navigate;