import {useState} from 'react'
import '../../css/Cart/Cart.css'

const Cart = ({cartItems,removeFromCart}) => {

    const [form,setForm] = useState(false)
    const [value,setValue] = useState("")




    const submitOrder = (e) => {
        e.preventDefault()

        const order = {
            name : value.name,
            email : value.email
        }

        console.log(order)
    }

    const handleChange = (e) => {
        setValue((prevState) => ({...prevState, [e.target.name] : e.target.value}))
    }


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
            {
                cartItems.length !==0 &&  <div className="cart-footer">
                <div className="total">total : ${cartItems.reduce((acc,p) => {
                    return acc + p.price
                },0)}</div>
                <button style={{cursor : 'pointer'}} onClick={() => setForm(true)}>select products</button>
            </div>
            }
            {
                form && <div className="checkout-form">
                    <span onClick={() => setForm(false)} className="close-icon">&times;</span>
                    <form onSubmit={submitOrder}>
                        <div>
                            <label>Name</label>
                            <input type="text" required name="name" onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" required name="email"  onChange={handleChange}/>
                        </div>
                        <div>
                            <button type="submit">CheckOut</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}


export default Cart