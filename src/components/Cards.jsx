import React from 'react'
import img1 from '../assets/image-retro-pcs.jpg'
import img2 from '../assets/image-gaming-growth.jpg'
import img3 from '../assets/image-top-laptops.jpg'

export default function Cards() {
  return (
    <div className='cards-container'>
      <div className="cards-wrapper">
        <div className="cards">

        <img src={img1} alt='' className='card-img first' />
        <div className="cards-infos">
          <h3 className="gray">01</h3>
          <h4>Reviving Retro PCs</h4>
          <p className='card-desc'>What happens when old PCs are given modern upgrades?</p>
        </div>
        </div>
        <div className="cards">

        <img src={img3} alt='' className='card-img' />
        <div className="cards-infos">
          <h3 className="gray">02</h3>
          <h4>Top 10 Laptops of 2022</h4>
          <p className='card-desc'>Our best picks for various needs and budgets.</p>
        </div>
        </div>
        <div className="cards">

        <img src={img2} alt='' className='card-img' />
        <div className="cards-infos">
          <h3 className="gray">03</h3>
          <h4>The Growth of Gaming</h4>
          <p className='card-desc'>How the pandemic has sparked fresh opportunities.</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}
