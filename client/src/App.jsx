import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Product from "./components/Product/Product"


import data from './data.json'

import {useState} from 'react'


function App() {

  const [products,setProducts] = useState(data)

  return (
    <div className="App">
      <div className="layout">
        <Header/>
        <main>
          <div className="wrapper">
              <Product products={products}/>
            <div className="filterEl">Filter</div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
