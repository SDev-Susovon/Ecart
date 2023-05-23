import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setProducts } from "../../../services/slices/ProductsSlice"

const LeftSidebar = () => {
    const { all_products } = useSelector(state => state?.productSlice)
    const dispatch = useDispatch()
    const [prodCatg, setProdCatg] = useState([])
    const [prodBrand, setProdBrand] = useState([])
    const [catVal, setCatVal] = useState("All")

    useEffect(() => {
        const filterProducts = () => {
            dispatch(setProducts(catVal))
        }

        const fetchCategory = () => {
            let catgData = all_products?.map(item => item.category)
            setProdCatg(catgData?.filter((item, i) => catgData?.indexOf(item) === i))

            let brandData = all_products?.map(item => item.brand)
            setProdBrand(brandData?.filter((item, i) => brandData?.indexOf(item) === i))
        }

        fetchCategory()
        filterProducts()

    }, [all_products, dispatch, catVal])

    return (
        <>
            <div className="left-sidebar">
                <h2>Category</h2>
                {/* <!--category-productsr--> */}
                
                <div
                    className="panel-group category-products" id="accordian">
                    {prodCatg?.map((item, i) =>
                        <div className="panel panel-default" key={i}>
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <Link data-toggle="collapse" data-parent="#accordian" onClick={() => setCatVal(item)}>
                                        <span className="badge pull-right"><i className="fa-solid fa-arrow-right"></i></span>
                                        {item}
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    )}
                    {/* <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <Link data-toggle="collapse" data-parent="#accordian" onClick={() => filterProducts("All")}>
                                    <span className="badge pull-right"><i className="fa-solid fa-arrow-right"></i></span>
                                    All
                                </Link>
                            </h4>
                        </div>
                    </div> */}


                    {/* <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                        <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                        Womens
                                    </a>
                                </h4>
                            </div>
                            <div id="womens" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>
                                        <li><a href="#!">Fendi</a></li>
                                        <li><a href="#!">Guess</a></li>
                                        <li><a href="#!">Valentino</a></li>
                                        <li><a href="#!">Dior</a></li>
                                        <li><a href="#!">Versace</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    {/* <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><a href="#1">Kids</a></h4>
                            </div>
                        </div> */}

                </div>

                {/* <!--/category-products--> */}

                {/* <!--brands_products--> */}
                <div className="brands_products">
                    <h2 style={{ marginTop: "20px" }}>Brands</h2>
                    {prodBrand?.map((item, i) =>
                        <div className="brands-name" key={i} style={{ paddingTop: "1px", paddingBottom: "1px" }}>
                            <ul className="nav nav-pills nav-stacked">
                                <li ><a href="#!">{item}</a></li>
                                {/* <li><a href="#!"> <span className="pull-right">(56)</span>Grüne Erde</a></li> */}
                            </ul>
                        </div>
                    )}
                </div>

                {/* <!--/brands_products--> */}

                {/* <!--price-range--> */}
                {/* <div className="price-range">
                    <h2>Price Range</h2>
                    <div className="well text-center">
                        <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                        <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
                    </div>
                </div> */}
                {/* <!--/price-range--> */}

                {/* <!--shipping--> */}
                <div className="shipping text-center">
                    <img src="assets/images/home/shipping.jpg" alt="" />
                </div>
                {/* <!--/shipping--> */}

            </div>
        </>
    )
}

export default memo(LeftSidebar)