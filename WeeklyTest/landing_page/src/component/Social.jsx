import React from 'react'

const SocialCard = (data) => {
    return (
        <div className='socialCardContainer'>
            <i className={data.icon}></i>
            <h1>{data.number}</h1>
            <p>{data.detail}</p>
        </div>
    )
}

const Social = () => {
  return (
    <div className='mainSocialSection'>
        <div className='mainSocialSectionSubContainer'>
            <SocialCard icon="fa-solid fa-trophy iconFont" number="22" detail="Awards Winning" />
            <SocialCard icon="fa-solid fa-suitcase iconFont" number="145" detail="Finished Projects" />
            <SocialCard icon="fa-solid fa-car iconFont" number="349" detail="Products Sold" />
            <SocialCard icon="fa-brands fa-twitter iconFont" number="2456" detail="Twitter Fans" />
        </div>        
    </div>
  )
}

export default Social;