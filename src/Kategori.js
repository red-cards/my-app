import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import kt from './kamarTidur.png';
import rm from './ruangMakan.png';
import rt from './ruangTamu.png';
import rk from './ruangKerja.png';
class Kategori extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row className="text-center mt-5">
                    <h1>Kategori Product</h1>
                </Row>
                <Row className="mt-2 w-75 mx-auto mb-5">
                    <Col>
                        <Card className="w-100 mx-auto shadow">
                            <Card.Img src={rt} style={{width: "100%",objectFit: "cover"}}/>
                            <Card.ImgOverlay className="d-flex align-items-end fs-5 text-white justify-content-center">Ruang Keluarga</Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="w-100 mx-auto">
                            <Card.Img src={rm} style={{width: "100%",objectFit: "cover"}}/>
                            <Card.ImgOverlay className="d-flex align-items-end fs-5 text-white justify-content-center">Ruang Makan</Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="w-100 mx-auto">
                            <Card.Img src={kt} style={{width: "100%",objectFit: "cover"}}/>
                            <Card.ImgOverlay className="d-flex align-items-end fs-5 text-white justify-content-center">Kamar Tidur</Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="w-100 mx-auto">
                            <Card.Img src={rk} style={{width: "100%",objectFit: "cover"}}/>
                            <Card.ImgOverlay className="d-flex align-items-end fs-5 text-white justify-content-center" style={{backgroundColor:"rgba(0, 0, 0, 0.3)"}}>Ruang Kerja</Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Kategori;