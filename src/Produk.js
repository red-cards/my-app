import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Ekspresikan from './ekspresikan.png';
import SofaBesar from './sofaBesar.png';
import ColorKecil from './color.png';
import SofaKecil from './sofaKecil.png';

class Product extends React.Component{
    render(){
        return(
            <Container fluid style={{backgroundColor:'#2e3192'}}> 
                <Row fluid  xs={1} md={2}>
                    <Col fluid='md'>
                        <Row>
                            <img src={Ekspresikan} className='text-center mx-auto mt-4 w-75' alt='ekspresikan ruangamu'/>
                        </Row>
                        <Row className='text-center text-white'>
                            <h1>PILIH KARAKTERMU</h1>
                            <p className='w-50 mx-auto fs-6'>SOFA DAPAT DI-CUSTOM SESUAI DENGAN MOOD WARNA DAN UKURAN YANG DIINGINKAN</p>
                        </Row>
                        <Row>
                            <img src={ColorKecil} alt='warna warna' className='w-25 mx-auto'/>
                        </Row>
                        <Row>
                        <img src={SofaKecil} alt='banyak sofa' className='w-50 mx-auto mt-4'/>
                        </Row>
                    </Col>
                    <Col fluid='md'>
                        <img src={SofaBesar} className='w-75 mt-5' alt='sofaGede'/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Product;