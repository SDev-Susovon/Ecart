import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReviewCart from '../components/core/checkout/ReviewCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../services/slices/CartSlice';

const initState = {
  name: "",
  email: "",
  add1: "",
  add2: "",
  zipcode: "",
  phoneNo: "",
  fax: "",
  message: "",
  country: "",
  states: ""
}

const ChechOut = () => {
  const [billInfo, setBillInfo] = useState(initState)
  const [ischkout, setIsChkout] = useState(false)
  const { user } = useSelector(state => state?.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {name, email, add1, add2, zipcode, phoneNo, country, states} = billInfo

  const handleChangeBillInfo = (e) => {
    setBillInfo({ ...billInfo, [e.target.name]: e.target.value })
  }

  const nextToPay = ()=>{
    if(name && email && add1 && add2 && zipcode && phoneNo && country && states){
      setBillInfo(initState)
      setIsChkout(true)
      toast.success('Choose Any Payment Option !!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{
      toast.error('Please Fillout All the Fields !!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  const placeOrder = ()=>{
    alert("Thank You!!! Your Order has been Placed. \nWe will Deliver Your Product within 7 Working Days!!")
    dispatch(emptyCart())
    navigate("/")
  }

  return (
    <>
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li><a href="#!">Home</a></li>
              <li className="active">Check out</li>
            </ol>
          </div>
          {/* <!--/breadcrums--> */}

          <div className="step-one">
            <h2 className="heading">
              <p>Please Provide Your Shipping Address to Complete your Order.</p>
            </h2>
          </div>
          <div className="checkout-options">
            <h3>{`${user[0]?.firstName} ${user[0]?.lastName}`}</h3>
            <p>Checkout options</p>
          </div>

          {/* <!--/checkout-options--> */}

          {/* <!--/register-req--> */}

          <div className="shopper-informations">
            <div className="row">
              <div className="col-sm-8 clearfix">
                <div className="bill-to">
                  <p>Bill To</p>
                  <div className="form-one">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="name" required="required" name='name' value={billInfo.name} placeholder="Name" onChange={handleChangeBillInfo} />
                      <input type="email" required="required" name='email' value={billInfo.email} placeholder="Email*" onChange={handleChangeBillInfo} />
                      <input type="add1" required="required" name='add1' value={billInfo.add1} placeholder="Address 1 *" onChange={handleChangeBillInfo} />
                      <input type="add2" required="required" name='add2' value={billInfo.add2} placeholder="Address 2" onChange={handleChangeBillInfo} />
                    </form>
                  </div>
                  <div className="form-two">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="zipcode" required="required" name='zipcode' maxLength={6} value={billInfo.zipcode} placeholder="Zip / Postal Code *" onChange={handleChangeBillInfo} />
                      <select type="country" required="required" name='country' value={billInfo.country} onChange={handleChangeBillInfo}>
                        <option>-- Country --</option>
                        <option>United States</option>
                        <option>UK</option>
                        <option>India</option>
                        <option>Ucrane</option>
                        <option>Canada</option>
                        <option>Dubai</option>
                      </select>
                      <select type="states" required="required" name='states' value={billInfo.states} onChange={handleChangeBillInfo}>
                        <option>-- State --</option>
                        <option>Delhi</option>
                        <option>Uttar Pradesh</option>
                        <option>West Bengal</option>
                        <option>Maharashtra</option>
                        <option>Tamilnadu</option>
                        <option>Punjab</option>
                      </select>
                      <input type="phoneNo" required="required" name='phoneNo' maxLength={10} value={billInfo.phoneNo} placeholder="Mobile Phone" onChange={handleChangeBillInfo} />
                      <input type="fax" name='fax' value={billInfo.fax} placeholder="Fax" onChange={handleChangeBillInfo} />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="order-message">
                  <p>Shipping Order</p>
                  <textarea type="message" name="message" value={billInfo.message} onSubmit={(e) => e.preventDefault()} style={{ height: "238px" }} placeholder="Notes about your order, Special Notes for Delivery" rows="15" onChange={handleChangeBillInfo}></textarea>
                  <button className="btn btn-primary pull-right" style={{marginBottom:"20px"}}  onClick={nextToPay}>Proceed to Pay</button>
                </div>
              </div>
            </div>
          </div>
          {ischkout ?
          <ReviewCart />
          : null }
          {ischkout ?
          <div className="payment-options">
            <span>
              <label><input type="checkbox" /> Direct Bank Transfer</label>
            </span>
            <span>
              <label><input type="checkbox" /> Check Payment</label>
            </span>
            <span>
              <label><input type="checkbox" /> Paypal</label>
            </span>
            <span className='pull-right'>
              <button className="btn btn-primary" onClick={placeOrder}>Place Order</button>
            </span>
          </div>
          : null }
        </div>
      </section>
      <ToastContainer/>
    </>
  )
}

export default ChechOut