import React from 'react';
import './main.css';
import Header from './Header';
import Image1 from './../image/boy-music.png';
import Image2 from './../image/music-headphone.png';

const Main = () => {
  return (
    <div class="main">
        <Header />
        <div className='container'>
            <div className='left'>
                <h1>MY</h1>
                <h1>SOUNDS</h1>
            </div>
            <img src={Image1} height="100%" width="30%" alt="" />
            <h2>Click Here To Listen  <ion-icon name="pause-circle-outline"></ion-icon></h2>
            <img className='imagestl' src={Image2} alt="" />
        </div>
        
    </div>
  )
}

export default Main