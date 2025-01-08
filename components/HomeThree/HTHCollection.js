import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from "swiper";
import HTHCollectionItem from "./HTHcollection/HTHCollectionItem";
import { useState , useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"
import Link from 'next/link';

const HTHCollection=()=>{
const [Sliders,setSliders] = useState([])

useEffect(()=>{

setSliders([
  {
    image: "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
    title: "Dizaynlar boyiicha",
    href:'category/offpageseo'
  },
  {
    image: "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
    title: "Marketing sohasi bo'yicha",
     href:'category/offpageseo'
  },
  {
    image: "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
    title: "Development IT"
  },
  {
    image: "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
    title: "Audio va videolar",
     href:'category/offpageseo'
  },
  {
    image: "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
    title: "Webdasturlash bo'yicha",
     href:'category/offpageseo'
  },
  {
    image: "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
    title: "Audio va video",
     href:'category/offpageseo'
  },
  {
    image: "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
    title: "Audio va video",
     href:'category/offpageseo'
  },
])  

},[])

return(
<div className="collection_style__three bg-body section_gap_y_bottom__1 position-relative z-1">
<div className="container">
    <div className="row gy-4 align-items-end">
        <div className="col-lg-6">
            <h2 className="section_title__2">Soff work xizmatlari bo'yicha</h2>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-end align-items-center">
            <div className="slider__nav d-flex mr-3">
                <div className="collection__three_prev navigation_btn_2 btn__prev mr-1">
                    <i className="bi bi-chevron-left"></i>
                </div>
                <div className="collection__three_next navigation_btn_2 btn__next">
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>
            
        </div>
    </div>
    <div className="collection_slider__two pt-40">
      <Swiper
       modules={[Navigation]}
       slidesPerView={4}
       speed={1500}
       spaceBetween={30}
       navigation={{
        nextEl: '.collection__three_next',
        prevEl: '.collection__three_prev',
      }}
      breakpoints = {{
        5000: {sliderPerView: 4},
        1200: {slidesPerView: 4},
        1000: {slidesPerView: 3},
        800: {slidesPerView: 2},
        600: {slidesPerView: 1},
        300: {slidesPerView: 1}
      }}
      >
        
      {Sliders.map(item=>{
       return(
        <SwiperSlide key={uuidv4()}>
          <HTHCollectionItem
            image={item.image}
            title={item.title}
            to={item.href}
          />
        </SwiperSlide>
       )
      })}  

      </Swiper>
    </div>
</div>
</div>
)
}
export default HTHCollection