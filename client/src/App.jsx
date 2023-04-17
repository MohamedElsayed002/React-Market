import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Product from "./components/Product/Product"
import Filter from "./components/Filter/Filter"

import data from './data.json'

import {useState} from 'react'


function App() {

  const [products,setProducts] = useState(data)
  const [sort,setSort] = useState("")
  const [size,setSize] = useState("ALL")

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


  return (
    <div className="App">
      <div className="layout">
        <Header/>
        <main>
          <div className="wrapper">
              <Product products={products}/>
              <Filter size={size}
                      sort={sort}
                      handleFilterBySize={handleFilterBySize} 
                      handleSortByOrder={handleSortByOrder}/>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
