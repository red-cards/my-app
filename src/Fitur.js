import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card  from 'react-bootstrap/Card';
import Card1 from './card1.png';
import Card2 from './card2.png';
import Card3 from './card3.png';
class Fitur extends React.Component{
    render(){
        return(
            <CardGroup>
                <Card className='border-0'>
                    <Card.Img src={Card1} alt="Card image" />
                </Card>
                <Card className='border-0'>
                    <Card.Img src={Card2} alt="Card image" />
                </Card>
                <Card className='border-0'>
                    <Card.Img src={Card3} alt="Card image" />
                </Card>
            </CardGroup>
        );
    }
}
export default Fitur;