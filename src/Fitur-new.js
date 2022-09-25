import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import kirim from './revisi-06.png';
class Fitur extends React.Component{
    render(){
        return(
            <Container className="">
                <Card className="mb-3 border-0"  style={{maxWidth:"540px"}}>
                    <Row className="g-0">
                        <Col md="9">
                            <Card.Img src={kirim}/>
                        </Col>
                        <Col md="3">
                            <Card.Body className="border-0" style={{backgroundColor:"#2e3192",color:'white'}}>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text className="fs-6">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="mb-3" style={{maxWidth:"540px"}}>
                    <Row className="g-0">
                        <Col md="8">
                            <Card.Img src={kirim}/>
                        </Col>
                        <Col md="4">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="mb-3" style={{maxWidth:"540px"}}>
                    <Row className="g-0">
                        <Col md="8">
                            <Card.Img src={kirim}/>
                        </Col>
                        <Col md="4">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}
export default Fitur;