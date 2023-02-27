import React from 'react'

export default function News() {
  return (
    <div className='news-container'>
        <h1 className="news-title">New</h1>
        <h4 className="news-content">Hydrogen VS Electric Cars</h4>
        <p className='news-description'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr />
        <h4 className="news-content">The Downsides of AI Artistry</h4>
        <p className='news-description'>What are the possible adverse effects of on-demand AI image generation?</p>
        <hr />
        <h4 className="news-content">Is VC Funding Drying Up?</h4>
        <p className='news-description'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        <hr />
    </div>
  )
}
