import React from 'react';
//import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';

class Footer extends React.Component{
    render(){
        return(
            <Navbar className='font-weight-bold' style={{backgroundColor: '#2e3192'}}>
                <Container >
                <Navbar.Text className='text-white'>
                    <h3>About Us</h3>
                    <p>WA : +62 851-5653-0969 <br/> IG : @difamebel</p>
                </Navbar.Text>
                <Navbar.Text className='text-white'>
                    <h3>Our Store</h3>
                    <p>Toko Wendit<br/>
                    Jalan Raya Wendit Barat No 6 Ruko C-D, Lowoksoro, Mangliawan, Kec. Pakis, Kabupaten Malang, Jawa Timur 65154
                    </p>
                    <p>Toko Dinoyo Mall<br/>Mall Dinoyo Lantai 1, FR. 1 No. 5.8 ,MT Haryono, Lowokwaru, Dinoyo, Kecamatan Lowokwaru, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144</p>
                </Navbar.Text>
                </Container>
            </Navbar>
   
        );
    }
}

export default Footer;