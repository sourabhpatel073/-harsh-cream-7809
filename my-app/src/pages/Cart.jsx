import Footer from "../Components/Footer";
import { Nav } from "../Components/Navbar";
import Trending from "../Components/Trending ";

const Cart = () => {
  return (
    <div>
      <Nav />
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h1>
            <b>Cart Item</b>
          </h1>
        </div>
        <div style={{ width: "50%" }}>
          <h1 style={{ marginLeft: "50%" }}>
            <b>Trending</b>
          </h1>
          <Trending />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Cart;
