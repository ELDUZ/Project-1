import React, { useEffect, useState } from 'react'
import './Main.css'
import Image from './images/1.jpg'

function Main() {
  const [list, addtolist] = useState({})
  const [shownorhidden, change] = useState('none')

  const ShiwHideCart = () => {
    if (shownorhidden === 'none') {
      change('block')
    } else {
      change('none')
    }
  }

  const addTocard = (id) => {
    const exists = list.includes(id)
    if (!exists) {
      addtolist((list) => id: {quantity: 1}, ...list )
      // addtolist((list) => [{ product: id, quantity: 1 }, ...list])
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(list))
  }, [list])

  return (
    <div className="body">
      <div className="filterDiv">
        <div>
          <button onClick={ShiwHideCart} className="cartButton">
            Cart
          </button>
          <h2 className="sectionText">Filters</h2>
        </div>
        <div className="filterText"></div>
        <div className="filterSize"></div>
        <div className="filterPrice"></div>
      </div>
      <div className="productDiv">
        <div className="item">
          <div className="">
            <img className="productimage" src={Image} />
          </div>
          <div className="productTitle">
            <b>1 JOGGING FIT PANTOLON</b>
          </div>
          <div className="productPrice">
            <b>659,95 TL</b>
          </div>
          <div className="productDiscounted">
            <b>759,95 TL</b>
          </div>
          <div className="addtocart">
            <button onClick={() => addTocard(0)}>Add to cart</button>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="productimage" src={Image} />
          </div>
          <div className="productTitle">
            <b>2 JOGGING FIT PANTOLON</b>
          </div>
          <div className="productPrice">
            <b>659,95 TL</b>
          </div>
          <div className="productDiscounted">
            <b>759,95 TL</b>
          </div>
          <div className="addtocart">
            <button onClick={() => addTocard(1)}>Add to cart</button>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="productimage" src={Image} />
          </div>
          <div className="productTitle">
            <b>3 JOGGING FIT PANTOLON</b>
          </div>
          <div className="productPrice">
            <b>659,95 TL</b>
          </div>
          <div className="productDiscounted">
            <b>759,95 TL</b>
          </div>
          <div className="addtocart">
            <button onClick={() => addTocard(2)}>Add to cart</button>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="productimage" src={Image} />
          </div>
          <div className="productTitle">
            <b>4 JOGGING FIT PANTOLON</b>
          </div>
          <div className="productPrice">
            <b>659,95 TL</b>
          </div>
          <div className="productDiscounted">
            <b>759,95 TL</b>
          </div>
          <div className="addtocart">
            <button onClick={() => addTocard(3)}>Add to cart</button>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="productimage" src={Image} />
          </div>
          <div className="productTitle">
            <b>5 JOGGING FIT PANTOLON</b>
          </div>
          <div className="productPrice">
            <b>659,95 TL</b>
          </div>
          <div className="productDiscounted">
            <b>759,95 TL</b>
          </div>
          <div className="addtocart">
            <button onClick={() => addTocard(4)}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="cart" style={{ display: shownorhidden }}>
        <button onClick={ShiwHideCart} className="cartButton">
          Cart
        </button>
      </div>
    </div>
  )
}

export default Main
