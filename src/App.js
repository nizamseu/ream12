import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Pages/Products/Products";
import Cart from "./Components/Pages/Cart/Cart";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders/ManageOrders";
import AddProduct from "./Components/Pages/Dashboard/AddProduct/AddProduct";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin/MakeAdmin";
import MangeProducts from "./Components/Pages/Dashboard/ManageProducts/MangeProducts";
import ManageUser from "./Components/Pages/Dashboard/ManageUser/ManageUser";
import MyOrders from "./Components/Pages/Dashboard/MyOrders/MyOrders";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import Upcomming from "./Components/Upcomming/Upcomming";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Registration/Registration";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/Pages/Checkout/CheckOut";
import AddUserSuggest from "./Components/Pages/Dashboard/AddUserSuggest/AdduserSuggest";
import DisplayUserSuggest from './Components/Pages/Dashboard/DisplayUserSuggest/DisplayUserSuggest';
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
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckOut />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<ManageOrders />} />
          <Route path="/dashboard/myOrders" element={<MyOrders />} />
          <Route path="/dashboard/manageOrders" element={<ManageOrders />} />
          <Route path="/dashboard/addProduct" element={<AddProduct />} />
          <Route path="/dashboard/manageProduct" element={<MangeProducts />} />
          <Route path="/dashboard/ManageUser" element={<ManageUser />} />
          <Route path="/dashboard/AddUserSuggest" element={<AddUserSuggest />} />
          <Route path="/dashboard/DisplayUserSuggest" element={<DisplayUserSuggest />} />
          <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
