import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/Navbar/Header/Header';
import ExploerMenu from '../../components/ExploerMenu/ExploerMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
    
    const[category,setCategory]=useState("All");

    return (
        <div>
            <Header/>
            <ExploerMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
        </div>
    );
};

export default Home;