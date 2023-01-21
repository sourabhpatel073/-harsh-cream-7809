import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img
            src="https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://n2.sdlcdn.com/imgs/j/w/0/KitchenAppliancesWeb_27sep-f91a3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://n1.sdlcdn.com/imgs/j/w/0/KitchenwareWeb_27sep-1b2d5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://n2.sdlcdn.com/imgs/j/w/0/KitchenStorageWeb_27sep-7484d.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg"
            alt=""
          />
        </div>
      </Carousel>
    );
  }
}

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// export default function Sliderr() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <img src="https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg"></img>
//       </SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// }

// import { useState, useEffect } from "react";
// export default function Slider() {
//   const [imgArr, setImg] = useState([
//     `https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg`,
//     `https://n2.sdlcdn.com/imgs/j/w/0/KitchenAppliancesWeb_27sep-f91a3.jpg`,
//     `https://n1.sdlcdn.com/imgs/j/w/0/KitchenwareWeb_27sep-1b2d5.jpg`,
//     `https://n2.sdlcdn.com/imgs/j/w/0/KitchenStorageWeb_27sep-7484d.jpg`,
//     `https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg`,
//   ]);

//   useEffect(() => {}, []);
//   let I = setInterval(function () {
//     if (i === image.length) {
//       i = 0;
//     }
//     <img src={imgArr[i]} />;
//     i++;
//   }, 3000);

//   return <div>
//     <img src></img>
//   </div>
// }

/*
https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg
https://n2.sdlcdn.com/imgs/j/w/0/KitchenAppliancesWeb_27sep-f91a3.jpg
https://n1.sdlcdn.com/imgs/j/w/0/KitchenwareWeb_27sep-1b2d5.jpg
https://n2.sdlcdn.com/imgs/j/w/0/KitchenStorageWeb_27sep-7484d.jpg
https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg
*/
