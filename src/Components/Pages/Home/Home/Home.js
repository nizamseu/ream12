import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Category />
            <Footer></Footer>
        </div>
    );
};

export default Home;