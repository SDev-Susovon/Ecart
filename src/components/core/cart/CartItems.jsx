import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decQty, incQty, removeProduct } from '../../../services/slices/CartSlice'

const CartItems = () => {
    const dispatch = useDispatch()
    const { cart_data } = useSelector(state => state.cart)
    // console.log(products)

    return (
        <div>
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description"></td>
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                { cart_data.map(item =>
                                    <tr key={item.id}>
                                        <td className="cart_product">
                                            <a href="#!"><img src="assets/images/cart/one.png" alt=""/></a>
                                        </td>
                                        <td className="cart_description">
                                            <h4><a href="#!">{item.title}</a></h4>
                                            <p>Color : {item.color}</p>
                                        </td>
                                        <td className="cart_price">
                                            <p><i className="fa-solid fa-indian-rupee-sign"></i> {item.price}</p>
                                        </td>
                                        <td className="cart_quantity">
                                            <div className="cart_quantity_button">
                                                <a className="cart_quantity_up" href="#!" onClick={()=>dispatch(incQty(item.id))}> + </a>
                                                <input 
                                                    className="cart_quantity_input" 
                                                    type="text" 
                                                    name="quantity" 
                                                    value={item.qty} 
                                                    readOnly
                                                    size="2"/>
                                                <a className="cart_quantity_down" href="#!" onClick={()=>dispatch(decQty(item.id))}> - </a>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="cart_total_price"><i className="fa-solid fa-indian-rupee-sign"></i> 
                                                {item.price * item.qty}
                                            </p>
                                        </td>
                                        <td className="cart_delete">
                                            <Link className="cart_quantity_delete" onClick={()=>dispatch(removeProduct(item.id))}><i className="fa fa-times"></i></Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> 
            {/* <!--/#cart_items--> */}
        </div>
    )
}

export default CartItems