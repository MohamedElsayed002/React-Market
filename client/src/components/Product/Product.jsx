import '../../css/Product/Product.css'
import Modal from 'react-modal'
import {useState} from 'react'
const Products = ({products , addToCart}) => {

    const [product,setProduct] = useState("")

    const openModal = (product) => {
        setProduct(product)
    }

    const closeModel = () => {
        setProduct(false)
    }

    return (
            <div className="products-wrapper">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="product-item">
                                <a href="#" onClick={() => openModal(product)}>
                                    <img src={product.image} alt={product.title} />
                                </a>
                                    <div className="product-desc">
                                        <p>{product.title}</p>
                                        <span>${product.price}</span>
                                    </div>
                                    <button onClick={() => addToCart(product)}>Add to cart</button>
                            </div>
                        )
                    })
                }

                <Modal isOpen={product} onRequestClose={closeModel}>
                    <span className="close-icon" onClick={closeModel}> &times; </span>
                    <div className="product-info">
                        <img src={product.image} alt={product.name}/>
                        <p>{product.title}</p>
                        <p>{product.desc}</p>
                    </div>
                </Modal>
            </div>
    )
}

export default Products