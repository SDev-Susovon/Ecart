import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../../common/Pagination'


const FeatureItems = () => {
    const { filter_products } = useSelector(state => state?.productSlice)
    const showPerPage = 9
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = useCallback((start,end) => {
        setPagination({start : start ,end : end})
    }, [])
    // console.log(filter_products);
    
    return (
        <>
            <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                
                {filter_products?.slice(pagination.start, pagination.end).map( item =>
                    <div className="col-sm-4" key={item.id} style={{marginTop:"5px", marginBottom:"5px"}}>
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="assets/images/home/product1.jpg" alt="" />
                                    {/* <img src={item.image} alt="" /> */}
                                    <h2><i className="fa-solid fa-indian-rupee-sign"></i> {item.price}</h2>
                                    <p>{item.title}</p>
                                    <Link to={`/pdtls/${item.id}`} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Product Details</Link>
                                </div>
                            </div>
                            {/* <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href="#!"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href="#!"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                )}
                {/* <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src="assets/images/home/product2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#!" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#!" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="choose">
                            <ul className="nav nav-pills nav-justified">
                                <li><a href="#!"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                <li><a href="#!"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* {console.log(filter_products?.length)} */}

            <Pagination 
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={filter_products?.length}
            />
        </>
    )
}

export default FeatureItems