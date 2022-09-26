import React from 'react';
import Nav from './Nav';
import Slider from './Slider';
import Fitur from './Fiturr';
import Produk from './Produk';
import SlideBarang from './Slidebarang';
import Kategori from './Kategori';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
class LandingPage extends React.Component{
  render(){
    return(
      <><Nav /><Slider /><Fitur /><Produk/><SlideBarang/><Kategori/><Footer/></> 
      
    );  
  }
}
export default LandingPage;
