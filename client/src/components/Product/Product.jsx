import '../../css/Product/Product.css'


const Products = ({products}) => {

    
    return (
            <div className="products-wrapper">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="product-item">
                                <a href="#">
                                    <img src={product.image} alt={product.title} />
                                </a>
                                    <div className="product-desc">
                                        <p>{product.title}</p>
                                        <span>{product.price}</span>
                                    </div>
                                    <button>Add to cart</button>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default Products