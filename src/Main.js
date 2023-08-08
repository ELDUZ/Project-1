import React, { useEffect, useState } from 'react'
import './Main.css'
import Image from './images/tshirt.jpg'
import axios from 'axios'

function Main() {
  const [cartlist, addtocartlist] = useState({})
  const [shownorhidden, change] = useState('none')
  const [products, setproducts] = useState([])

  axios
    .get('http://127.0.0.1:3002')
    .then(async function (response) {
      setproducts(await response.data)
    })
    .catch(function (error) {
      console.log(error)
    })

  const ShiwHideCart = () => {
    if (shownorhidden === 'none') {
      change('block')
    } else {
      change('none')
    }
  }

  const addTocard = (id) => {
    const exists = id in cartlist
    const key = id
    if (!exists) {
      cartlist[key] = { quantity: 1 }
      addtocartlist((current) => ({ ...current }))
    } else {
      cartlist[key].quantity += 1
      addtocartlist((current) => ({ ...current }))
    }
  }

  const productList = products.map((product) => (
    <div className="item" key={product.productid}>
      <div className="">
        <img className="productimage" src={Image} />
      </div>
      <div className="productTitle">
        <b>{product.title}</b>
      </div>
      <div className="productPrice">
        <b>{product.price}TL</b>
      </div>
      <div className="productDiscounted">
        <b>{product.price}TL</b>
      </div>
      <div className="addtocart">
        <button onClick={() => addTocard(product.productid)}>
          Add to cart
        </button>
      </div>
    </div>
  ))

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartlist))
  }, [cartlist])

  // setcartproducts(JSON.parse(localStorage.getItem('cart')))

  // const cartstorage = () => {
  //   localStorage
  // }

  // const increase = () => {
  //   setcount((count) => count + 1)
  // }
  // const decrease = () => {
  //   setcount((count) => count - 1)
  // }

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
      <div className="productDiv">{productList}</div>
      <div className="cart" style={{ display: shownorhidden }}>
        <div className="showorhide">
          <button onClick={ShiwHideCart} className="cartButton">
            Cart
          </button>
        </div>
        <div className="productsincart">
          <div className="cartitem">
            <div className="section1">
              <img className="image" src={Image} />
            </div>
            <div className="section2">
              <div className="title">
                <b>title of product which is in cart</b>
              </div>
              <div className="size">
                <b>size of product which is in cart</b>
              </div>
            </div>
            <div className="section3">
              <div className="count">
                <div className="counter">
                  {/* <input type="number" readOnly value={itemcountoncart} />
                  <button onClick={increase}>+</button>
                  <button onClick={decrease}>-</button> */}
                </div>
              </div>
              <div className="price"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
