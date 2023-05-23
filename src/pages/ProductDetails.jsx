import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams } from 'react-router-dom'
import LeftSidebar from '../components/core/home/LeftSidebar'
import Recomended from '../components/core/home/Recomended'
import { addProduct } from '../services/slices/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { pid } = useParams()
  const { all_products } = useSelector( state => state?.productSlice)
  const {token} = useSelector( state => state.auth)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const product = all_products?.filter(item => item.id === pid)

  const validateUser = (product)=>{
    if(token){
      dispatch(addProduct(product))
    }else{
      // alert("Please Login to Continue !!!")
      // navigate("/login")
      toast.warn('🦄 Please Login to Continue !!!', {
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

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">

              <LeftSidebar />

            </div>

            <div className="col-sm-9 padding-right">
              {/* <!--product-details--> */}
              <div className="product-details">
                <div className="col-sm-5">
                  <div className="view-product">
                    <img src="assets/images/home/product1.jpg" alt="" />
                    {/* <h3>ZOOM</h3> */}
                  </div>

                  {/* Carousel */}
                  <div id="similar-product" className="carousel slide" data-ride="carousel">

                    <button type="button" className="btn btn-fefault cart" onClick={()=> validateUser(product[0])}>
                      <i className="fa fa-shopping-cart"></i>
                      &nbsp;Add to cart
                    </button>
                    <button type="button" className="btn btn-fefault cart" onClick={()=> validateUser(product[0])}>
                      <i className="fa-sharp fa-solid fa-bolt"></i>
                      &nbsp;&nbsp;Buy Now
                    </button>
                  </div>

                </div>

                <div className="col-sm-7">

                  {/* <!--/product-information--> */}
                  <div className="product-information">
                    <img src="assets/images/product-details/new.jpg" className="newarrival" alt="" />
                    <h2>{product[0]?.title}</h2>
                    <img style={{marginBottom : "10px"}} src="assets/images/product-details/rating.png" alt="" />
                    <p>Web ID: {product[0]?.id}</p>
                    <span>
                      <span><i className="fa-solid fa-indian-rupee-sign"></i> {product[0]?.price}</span>
                      <label>Quantity:</label>
                      <input type="text" value={product[0]?.qty} readOnly />
                    </span>
                    <p><b>Availability:</b> In Stock</p>
                    <p><b>Condition:</b> New</p>
                    <p><b>Brand:</b> {product[0]?.brand}</p>
                    <a href="#!"><img src="assets/images/product-details/share.png" className="share img-responsive" alt="" /></a>
                  </div>
                  {/* <!--/product-information--> */}
                </div>
              </div>
              {/* <!--/product-details--> */}

              {/* <!--category-tab--> */}
              <div className="category-tab shop-details-tab">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs">
                    <li className="active"><a href="#details" data-toggle="tab">Details</a></li>
                    {/* <li><a href="#companyprofile" data-toggle="tab">Company Profile</a></li> */}
                    {/* <li><a href="#tag" data-toggle="tab">Tag</a></li> */}
                    <li><a href="#reviews" data-toggle="tab">Reviews (5)</a></li>
                  </ul>
                </div>

                <div className="tab-content">
                  <div className="tab-pane fade active in" id="details" >
                    <div className="col-sm">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <h2>{product[0]?.title}</h2>
                            <p>{product[0]?.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <div className="tab-pane fade" id="reviews" >
                    <div className="col-sm-12">
                      <ul>
                        <li><a href="#!"><i className="fa fa-user"></i>EUGEN</a></li>
                        <li><a href="#!"><i className="fa fa-clock-o"></i>12:41 PM</a></li>
                        <li><a href="#!"><i className="fa fa-calendar-o"></i>31 DEC 2014</a></li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <p><b>Write Your Review</b></p>

                      <form action="#">
                        <span>
                          <input type="text" placeholder="Your Name" />
                          <input type="email" placeholder="Email Address" />
                        </span>
                        <textarea name="" ></textarea>
                        <b>Rating: </b> <img src="assets/images/product-details/rating.png" alt="" />
                        <button type="button" className="btn btn-default pull-right">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
              {/* <!--/category-tab--> */}

              <Recomended />

            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  )
}

export default ProductDetails