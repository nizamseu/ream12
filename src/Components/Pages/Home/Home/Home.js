import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Category /> */}
      <Products />
      <Footer></Footer>
    </div>
  );
};

export default Home;
