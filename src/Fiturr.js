import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kirim from './revisi-06.png';
import rakit from './revisi-08.png';
import bayar from './revisi-02.png';
class Fitur extends React.Component{
    render(){
        return(
            <Container fluid className="mt-3 mb-3">
                <Row xs={1} lg={3} fluid>
                    <Col>
                        <Row  xs={1} lg={2} fluid>
                            <Col style={{backgroundImage:`url(${kirim})`,minHeight:"350px",backgroundRepeat:"no-repeat"}}>
                                
                            </Col>
                            <Col  style={{backgroundColor:"#2e3192",color:'white'}}>
                                <p className="fs-4">Gratis Ongkir</p>
                                <p className="fs-6">Gratis ongir untuk area kota malang, untuk pengiriman di wilayah lain bisa hubungi kami untuk biayanya</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row  xs={1} lg={2} fluid>
                            <Col style={{backgroundImage:`url(${rakit})`,minHeight:"350px",backgroundRepeat:"no-repeat"}}>
                                
                            </Col>
                            <Col  style={{backgroundColor:"#2e3192",color:'white'}}>
                                <p className="fs-4">Gratis Rakit</p>
                                <p className="fs-6">Sama sepeti ongkir, gratis rakit untuk semua konsumen, jadi jangan khawatir untuk pembelian dalam packing</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row  xs={1} lg={2} fluid>
                            <Col style={{backgroundImage:`url(${bayar})`,minHeight:"350px",backgroundRepeat:"no-repeat"}}>
                                
                            </Col>
                            <Col  style={{backgroundColor:"#2e3192",color:'white'}}>
                                <p className="fs-4">Pembayaran Flexible</p>
                                <p className="fs-6">Kami menyediakan beragam kemudahan untuk pembayaran, mulai tunai, kredit, maupun COD</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Fitur;