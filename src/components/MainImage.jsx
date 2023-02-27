import React from 'react'
import image from '../assets/image-web-3-desktop.jpg'
import mobImage from "../assets/image-web-3-mobile.jpg";

export default function MainImage() {
  return (
    <div className='image-wrapper'>
        <picture>
            <source media='(max-width:600px)' srcSet={mobImage} />
            <img src={image} alt="web3" width='100%' />
        </picture>
        <div className="content-wrapper">  
            <h1 className="title">The Bright Future of Web 3.0?</h1>
            <div className="right-content">
                <p className="paragraph">
                We dive into the next evolution of the web 
                that claims to put the power of the platforms
                back into the hands of the people. But is 
                it really fulfilling its promise? 
                </p>
                <button className="read-more">READ MORE</button>
            </div>
        </div>
    </div>
  )
}
