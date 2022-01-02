import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Pages/Products/Products";
import Cart from "./Components/Pages/Cart/Cart";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders/ManageOrders";
import AddProduct from "./Components/Pages/Dashboard/AddProduct/AddProduct";
import UserManage from "./Components/Pages/Dashboard/UserManage/UserManage";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin/MakeAdmin";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import Upcomming from "./Components/Upcomming/Upcomming";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Registration/Registration";

function App() {
  return (
    <BrowserRouter className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/upcomming" element={<Upcomming />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<ManageOrders />} />
          <Route path="/dashboard/addproduct" element={<AddProduct />} />
          <Route path="/dashboard/usermanage" element={<UserManage />} />
          <Route path="/dashboard/makeaddmin" element={<MakeAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
