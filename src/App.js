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


function App() {
  return (
    <BrowserRouter className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
