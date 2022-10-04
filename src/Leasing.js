import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hci from "./hci.jpg";
import adira from "./adira.jpg";
import aeon from "./aeon.png";

class Leasing extends React.Component{
    render(){
        return(
            <Container className="pb-5">
                <Row className="text-center">
                    <h3>Our Payment Partners</h3>
                </Row>
                <Row xs={1} lg={3} fluid className="pt-2">
                    <Col className="text-center"><img src={hci} alt="hci" className='w-25 mx-auto'/></Col>
                    <Col className="text-center"><img src={aeon} alt="aeon" className='w-25 mx-auto'/></Col>
                    <Col className="text-center"><img src={adira} alt="adira" className='w-25 mx-auto'/></Col>
                </Row>
            </Container>
        );
    }
}
export default Leasing;