import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../components/FoodDisplay/Fooddisplay'

const Home = () => {

    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <Fooddisplay category={category} />
        </div>
    )
}

export default Home
