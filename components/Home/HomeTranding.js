import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideItem from './Homeslider/SlideItem';
import { Navigation } from "swiper";
import TrandingSlide from "./HomeTranding/TrandingSlide"
import { useState , useEffect } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from "uuid"


const HomeTranding=()=>{
const [Trandings,setTranding] = useState([])

useEffect(()=>{

setTranding([
  {
  
   NftImage :"/images/nft/tranding-one.png",
  
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  },
  {
  
   NftImage :"/images/nft/tranding-two.png",
  
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  },
  {
  
   NftImage :"/images/nft/tranding-three.png",
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  },
  {
 
   NftImage :"/images/nft/tranding-four.png",
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  },
  {
  
   NftImage :"/images/nft/tranding-one.png",
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  },
  {

   NftImage :"/images/nft/tranding-two.png",
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  },
  {
 
   NftImage :"/images/nft/tranding-three.png",
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  },
  {
  
   NftImage :"/images/nft/tranding-four.png",
 
   name :"Armament",
   title :"Pretty Mundane",
   BidEnd : 100000000
  }
 ])  

},[])

return(
<div className="live_auction_style__one bg-body section_gap_y_top__2">
<div className="container">
<div className="row pb-30">
    <div className="col-lg-12 d-flex align-items-center justify-content-between gap-18 flex-wrap flex-lg-nowrap ">
        <h2 className="section_title__1 fw-bold">
            <span className="text-nowrap">Frilanserlarimiz tomonidan yaratilgan loyihalardan ilhom oling</span>
        </h2>
        <div className="section__line d-lg-block d-none"></div>
        <div className="section__actions d-flex gap-4">

            <div className="slider__navigation d-flex gap-2">
                <div className="live_auction__prev navigation__btn btn__prev">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.75 13.1677L1.81066 8.22739C1.22734 7.64395 1.22734 6.68924 1.81066 6.1058L6.75 1.16553"
                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="live_auction__next navigation__btn btn__next">
                    <svg width="7" fill="none" height="14" viewBox="0 0 7 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 13.1677L5.68934 8.22739C6.27266 7.64395 6.27266 6.68924 5.68934 6.1058L0.75 1.16553"
                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
           
           <Link legacyBehavior  href="/">
            <a className="btn-rounded-v1 varient-2">
                <span className="text-nowrap">Barchasini ko'rish</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 6H11.25" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M6.25 1L11.25 6L6.25 11" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </a>
           </Link>
        </div>
    </div>
</div>
  <Swiper
     modules={[Navigation]}
     speed={1000}
     spaceBetween={30}
     loop={true}
     roundLengths={true}
     centeredSlides={false}
     breakpoints = {{
       5000: {sliderPerView: 4},
       1200: {slidesPerView: 4},
       1000: {slidesPerView: 3},
       800: {slidesPerView: 2},
       600: {slidesPerView: 1},
       300: {slidesPerView: 1}
     }}
     navigation = {{
        nextEl: '.live_auction__next',
        prevEl: '.live_auction__prev',
    }}
    >
    
    {
      Trandings.map(tranding=>{
       return(
        <SwiperSlide key={uuidv4()}>
          <TrandingSlide
         
           username = {tranding.username}
           NftImage = {tranding.NftImage}
           NftIcon = {tranding.NftIcon}
           name = {tranding.name}
           title = {tranding.title}
           BidEnd = {tranding.BidEnd}
          />
        </SwiperSlide>
       )
      })
    }

  </Swiper>
</div>
</div>
)
}
export default HomeTranding