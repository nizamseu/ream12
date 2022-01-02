import React from "react";
import Login from "../../../Login/Login/Login";
import Registration from "../../../Login/Registration/Registration";
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
      <Login></Login>
      <Registration></Registration>
    </div>
  );
};

export default Home;
