import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Product from "./components/Product/Product"
import Filter from "./components/Filter/Filter"
import Cart from "./components/Cart/Cart"
import data from './data.json'

import {useEffect, useState} from 'react'


function App() {

  const [products,setProducts] = useState(data)
  const [sort,setSort] = useState("")
  const [size,setSize] = useState("ALL")
  const [cartItems,setCartItems] = useState( JSON.parse(localStorage.getItem("cartItems")) || [])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  } , [cartItems])

  const handleFilterBySize = (e) => {
    setSize(e.target.value)

    if(e.target.value === 'ALL') {
      setProducts(data)
    }else {
      let cloneProduct = [...products]
      let newProduct = cloneProduct = cloneProduct.filter(product => product.sizes.indexOf(e.target.value) != -1)
      setProducts(newProduct)
    }

  }


  const handleSortByOrder = (e) => {
    let order = e.target.value
    setSort(order)
    let productsClone = [...products]
    let newProducts = productsClone.sort(function (a,b) {
      if(order === "lowest") {
        return a.price - b.price
      }else if (order === "highest") {
        return b.price - a.price
      }else {
        return a.id < b.id ? 1 : -1
      }
    })
    setProducts(newProducts)
  }


  const addToCart = (product) => {
    let cartItemsClone = [...cartItems]
    let isProductExist = false
    cartItemsClone.forEach(p => {
      if(p.id === product.id) {
        p.qty++
        isProductExist = true
      }
    })
    if(!isProductExist) {
      cartItemsClone.push({...product,qty:1})
    }
    setCartItems(cartItemsClone)
  }


  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems]
    setCartItems(cartItemsClone.filter(p => p.id !== product.id))
  }
  return (
    <div className="App">
      <div className="layout">
        <Header/>
        <main>
          <div className="wrapper">
              <Product  addToCart={addToCart}
                        products={products}/>
              <Filter size={size}
                      products={products}
                      sort={sort}
                      handleFilterBySize={handleFilterBySize} 
                      handleSortByOrder={handleSortByOrder}/>
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
