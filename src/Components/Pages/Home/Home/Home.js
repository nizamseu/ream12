import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Category from '../Category/Category';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <Category /> */}
            <Products />
        </div>
    );
};

export default Home;