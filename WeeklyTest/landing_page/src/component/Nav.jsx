import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="left">
            <h1>Flex Business Pro</h1>
            <p>Clean and Modern Business Theme</p>
        </div>
        <div className="right">
            <div style={{color: "skyblue"}}>Home</div>            
            <div>About Us</div>            
            <div>Styleguide</div>            
            <div>Blog</div>            
            <div>Contact Us</div>            
        </div>
    </div>
  )
}

export default Nav