import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from './Components/Pages/Products/Products';
import Cart from './Components/Pages/Cart/Cart';
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders/ManageOrders";
import AddProduct from './Components/Pages/Dashboard/AddProduct/AddProduct';
import UserManage from './Components/Pages/Dashboard/UserManage/UserManage';
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin/MakeAdmin";


function App() {
  return (
    <BrowserRouter className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
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
