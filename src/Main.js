import React from 'react'
import './Main.css'

function Main() {
  return (
    <div className="body">
      <div className="filterDiv">
        <div><b className='sectionText'>Filters</b></div>
        <div className='filterText'></div>
        <div className='filterSize'></div>
        <div className='filterPrice'></div>
      </div>
      <div className="productDiv">
        <div className='item'>
          <div><img src='images/1.jpg'></img></div>
        </div>
      </div>
    </div>
  )
}

export default Main
