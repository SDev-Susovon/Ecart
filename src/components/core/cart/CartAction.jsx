import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { totalAmount } from '../../../services/slices/CartSlice'

const CartAction = () => {
    const {cart_data, sub_total, shipping_value, total} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <div>
            <section id="do_action">
                <div className="container">
                    <div className="heading">
                        <h3>What would you like to do next?</h3>
                        <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="chose_area">
                                <ul className="user_option">
                                    <li>
                                        <input type="checkbox"/>
                                            <label>Use Coupon Code</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                            <label>Use Gift Voucher</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                            <label>Estimate Shipping & Taxes</label>
                                    </li>
                                </ul>
                                
                                <a className="btn btn-default update" href="#!">Get Quotes</a>
                                <a className="btn btn-default check_out" href="#!">Continue</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="total_area">
                                <ul>
                                    <li>Cart Sub Total <span>{sub_total}</span></li>
                                    {/* <li>Eco Tax <span>$2</span></li> */}
                                    <li>Shipping Cost <span>{shipping_value}</span></li>
                                    <li>Total <span>{total}</span></li>
                                </ul>
                                <Link className="btn btn-default update" onClick={()=>dispatch(totalAmount())}>Update</Link>
                                {cart_data.length && sub_total ?
                                    <Link className="btn btn-default check_out" to="/chkout">Check Out</Link>
                                : null}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/#do_action--> */}
        </div>
    )
}

export default CartAction