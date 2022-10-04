import React from 'react';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import Carousel from 'react-bootstrap/Carousel';
//import { Container } from 'react-bootstrap';
//import cat from './cat.png';

class Slider extends React.Component{
    render(){
        return(
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;