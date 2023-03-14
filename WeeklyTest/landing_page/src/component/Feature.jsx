import React from 'react';


const Card = (props) => {
  return (
    <div className='featureCard'>
      <div className='featureCardImg'>
        <i className={props.icon}></i>
      </div>
      <div className='featureCardContent'>
        <h2>Fully Responsive</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere eaque doloremque dicta perspiciatis dolor pariatur sit alias tempora commodi.</p>
        <a href="#0">Read More</a>
      </div>
    </div>
  )
}

const Feature = () => {
  return (
    <div className='mainFeatureSection'>
        <h1>Our Features</h1>
        <div className='featureCardContainer'>
          <Card icon="fa-solid fa-desktop" />
          <Card icon="fa-solid fa-user" />
          <Card icon="fa-solid fa-recycle" />
        </div>
        
    </div>
  )
}

export default Feature