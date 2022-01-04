import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Category /> */}
      <Banner></Banner>
      <Products />
      <Footer></Footer>
    </div>
  );
};

export default Home;
