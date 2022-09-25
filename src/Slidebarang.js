import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from './bg-slideBarang.png';
import mm1 from './mm-1.png';
import mm2 from './mm-2.png';
import sofa1 from './sofa-1.png';
import sofa2 from './sofa-2.png';
class SlideBarang extends React.Component{
    render(){
        return(
            <Container fluid style={{backgroundImage:`url(${bg})`,backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'none'}} className='w-100'>
                <Row>
                    <Col className="w-50 pt-5">
                        <Carousel indicators={false} className="">
                            <Carousel.Item className="">
                                <img alt="gambar meja makan 1" src={mm1} className="w-100 d-flex align-items-end"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="gambar meja makan 2" src={mm2} className="w-100 d-flex align-items-end"/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="w-50">
                        <Carousel  indicators={false}>
                            <Carousel.Item>
                                <img alt="gambar sofa 1"  src={sofa1} className="w-100 d-flex align-items-end "/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="gambar sofa 2"  src={sofa2} className="w-100 d-flex align-items-end "/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                
            </Container>
        );
    };
}
export default SlideBarang;