import MyCarousel from "../Components/Slider";
import { Nav } from "../Components/Navbar";
import Footer from "../Components/Footer";
import Trending from "../Components/Trending ";
import LeftDiv from "../Components/LeftDiv";
import AllProducts from "../Components/SearchData";
const Home = () => {
  return (
    <>
      <Nav />
      <div style={{ display: "flex", margin: "auto" }}>
        <LeftDiv />
        <div style={{ width: "75%", margin: "auto", marginTop: "20px" }}>
          <MyCarousel />
          <div>
            <AllProducts />
            <Trending />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};
export default Home;

/*
https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg
https://n2.sdlcdn.com/imgs/j/w/0/KitchenAppliancesWeb_27sep-f91a3.jpg
https://n1.sdlcdn.com/imgs/j/w/0/KitchenwareWeb_27sep-1b2d5.jpg
https://n2.sdlcdn.com/imgs/j/w/0/KitchenStorageWeb_27sep-7484d.jpg
https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg
*/

// function carousel() {
//   let image = [
//     `https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg`,
//     `https://n2.sdlcdn.com/imgs/j/w/0/KitchenAppliancesWeb_27sep-f91a3.jpg`,
//     `https://n1.sdlcdn.com/imgs/j/w/0/KitchenwareWeb_27sep-1b2d5.jpg`,
//     `https://n2.sdlcdn.com/imgs/j/w/0/KitchenStorageWeb_27sep-7484d.jpg`,
//     `https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg`,
//   ];

//   let I = setInterval(function () {
//     if (i === image.length) {
//       i = 0;
//     }
//     imgEl.src = image[i];
//     carsole_div.append(imgEl);
//     i++;
//   }, 3000);
// }
// carousel();
