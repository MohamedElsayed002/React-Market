
import '../../css/Cart/Cart.css'

const Cart = ({cartItems,removeFromCart}) => {
    return (
        <div className="cart-wrapper">
            <div className="cart-title">{cartItems.length === 0 ? 'Cart Empty' : <p>
                    There is {cartItems.length} in cart
                </p>}</div>
            <div className="cart-items">
                {
                    cartItems.map(item => {
                        return (
                            <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className="cart-info">
                                <div>
                                    <p>item :{item.title}</p>
                                    <p>qty :{item.qty}</p>
                                    <p>price : ${item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Cart