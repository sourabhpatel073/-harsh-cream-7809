import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import About from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Signup from "../pages/Signup";
import Product from "../pages/Product";

function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users" element={<Users />} />

      <Route path="/product/:product_id" element={<Product />} />
    </Routes>
  );
}
export default AllRouts;
