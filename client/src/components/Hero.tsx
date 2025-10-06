import slide1 from "../assets/slider_2.jpg"
import slide2 from "../assets/slider.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

const Hero = () => {
  return (
    <div className="flex items-center w-full justify-center h-full">
      <Swiper
      slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}  
          autoplay={{
            delay:3000,
            disableOnInteraction:false
          }}

          navigation={true}
          modules={[ Navigation,Autoplay]}
          className='flex w-full h-full justify-between transition-all duration-3000 swiper  items-center '
      >
        <div className="">
           <SwiperSlide>
         <img src={slide1} alt="" className='w-full h-full ' />
        </SwiperSlide>
        <SwiperSlide>
         <img src={slide2} alt="" className='w-full h-full ' />
        </SwiperSlide>
        </div>

      </Swiper>
    </div>
  )
}

export default Hero