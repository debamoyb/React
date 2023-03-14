import React from 'react';
import Image from './Image'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="leftFooter">
            <div className="leftFooterInnerLeft">
                <h3>ABOUT FLEX BUSINESS PRO</h3>    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ullam voluptatibus natus voluptates, placeat iusto mollitia nam ab esse aliquid delectus ad suscipit molestiae expedita sit tenetur laudantium pariatur unde voluptas! Reprehenderit, facilis exercitationem quos dignissimos repellendus quisquam ipsum sint vel blanditiis, assumenda nostrum rem optio, ipsam itaque neque magni?</p>
            </div>    
            <div className="leftFooterInnerRight">
                <h3>RECENT POSTS</h3>
                <div>
                    <p>Fly to London</p>
                    <p>September 18, 2018</p>
                </div>
                <div>
                    <p>Stair communication</p>
                    <p>September 18, 2018</p>
                </div>
                <div>
                    <p>Do you want to be a robot</p>
                    <p>September 18, 2018</p>
                </div>
            </div>
        </div>        
        <div className="rightFooter">
            <h3>GALLERIES</h3>
            <Image />
        </div>
    </div>
  )
}

export default Footer