import React from "react";
import { Link } from 'react-router-dom';
import { Navigation, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function BrandsSection (){
    return (
        <>

<div className="brands-section">
<Swiper
   navigation={true} modules={[Autoplay, Navigation]}
   spaceBetween={30}
   autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }}
  loop={true}
  className="mySwiper-brands"             
 >
   <SwiperSlide><div className="img-box"><img src={process.env.PUBLIC_URL + '/assets/images/logo-01.png'} alt=" " className="img-fluid" /></div></SwiperSlide>
   <SwiperSlide><div className="img-box"><img src={process.env.PUBLIC_URL + '/assets/images/logo-02.png'} alt=" " className="img-fluid" /></div></SwiperSlide>
   <SwiperSlide><div className="img-box"><img src={process.env.PUBLIC_URL + '/assets/images/logo-03.png'} alt=" " className="img-fluid" /></div></SwiperSlide>
   <SwiperSlide><div className="img-box"><img src={process.env.PUBLIC_URL + '/assets/images/logo-04.png'} alt=" " className="img-fluid" /></div></SwiperSlide>
   <SwiperSlide><div className="img-box"><img src={process.env.PUBLIC_URL + '/assets/images/logo-05.png'} alt=" " className="img-fluid" /></div></SwiperSlide>
   <SwiperSlide><div className="img-box"><img src={process.env.PUBLIC_URL + '/assets/images/logo-01.png'} alt=" " className="img-fluid" /></div></SwiperSlide>
   
</Swiper>
  
             
 </div>

 </>
    );
}

export default BrandsSection;
