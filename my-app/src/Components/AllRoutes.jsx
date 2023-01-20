import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Singleuser from "../pages/singleuser";
import PrivateRout from "./PrivateRout";
import Login from "../pages/Login";

function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />
      <Route
        path="/users"
        element={
          <PrivateRout>
            <Users />
          </PrivateRout>
        }
      />

      <Route path="/users/:user_id" element={<Singleuser />} />
    </Routes>
  );
}
export default AllRouts;
