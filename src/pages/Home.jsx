import FeatureItems from '../components/core/home/FeatureItems'
import HomeSlider from '../components/core/home/HomeSlider'
import LeftSidebar from '../components/core/home/LeftSidebar'
import Recomended from '../components/core/home/Recomended'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../services/slices/ProductsSlice'
import { useEffect } from 'react'


const Home = () => {
	const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <HomeSlider/>

            <section>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<LeftSidebar/>
				</div>
				
				<div className="col-sm-9 padding-right">
                    {/* <!--features_items--> */}
					<FeatureItems/>
                    {/* <!--features_items--> */}
                    
                    {/* <!--recommended_items--> */}
					<Recomended/>
                    {/* <!--/recommended_items--> */}
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}

export default Home