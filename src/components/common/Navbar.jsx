import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLogout } from '../../services/slices/AuthSlice'
import { searchProducts } from '../../services/slices/ProductsSlice'

const Navbar = () => {
    const { cart_data } = useSelector(state => state.cart)
    const { user, token } = useSelector(state => state.auth)
    // const { product_query } = useSelector(state => state.productSlice)
    const dispatch = useDispatch()
    const len = cart_data.length
    

    return (
        <div>
            {/* <!--header--> */}

            <header id="header">

                {/* <!--header_top--> */}
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><Link to=""><i className="fa fa-phone"></i> +91 90 1234 5678</Link></li>
                                        <li><Link to=""><i className="fa fa-envelope"></i> info@e-cart.domain.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><Link to=""><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to=""><i className="fa fa-dribbble"></i></Link></li>
                                        <li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/header_top--> */}

                {/* <!--header-middle--> */}
                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="logo pull-left">
                                    <Link to="/"><img src="assets/images/home/logonew.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="shop-menu pull-right">
                                    <ul className="nav navbar-nav">
                                        {token ?
                                            <li><Link to=""><i className="fa fa-user"></i> {`${user[0]?.firstName} ${user[0]?.lastName}`}</Link></li>
                                            : null}
                                        {/* <li><Link to=""><i className="fa fa-star"></i> Wishlist</Link></li> */}
                                        {/* <li><Link to="/chkout"><i className="fa fa-crosshairs"></i> Checkout</Link></li> */}
                                        <li><Link to="/cart"><i className="fa fa-shopping-cart"></i> Cart {len ? <p>({len})</p> : null}
                                        </Link></li>
                                        {!token ?
                                            <li><Link to="/login"><i className="fa fa-lock"></i> Login</Link></li>
                                            : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/header-middle--> */}

                {/* <!--header-bottom--> */}
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><Link to="/" className="active">Home</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        {token ?
                                        <li className="dropdown"><Link>My Account<i className="fa fa-angle-down"></i></Link>
                                            <ul role="menu" className="sub-menu">
                                                <li><Link onClick={()=>dispatch(setLogout())}>Log Out</Link></li>
                                            </ul>
                                        </li>
                                        : null}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <form onSubmit={e => e.preventDefault()} className="search_box pull-right">
                                    <input 
                                    type="text" 
                                    className='form-controll'
                                    // value={product_query}
                                    onChange={(e) => dispatch(searchProducts(e.target.value))}
                                    placeholder="Search Products..." 
                                />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/header-bottom--> */}
            </header>
        </div>
    )
}

export default Navbar