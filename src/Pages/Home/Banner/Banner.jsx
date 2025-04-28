import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import one from '../../../assets/one.jpg';
import two from '../../../assets/two.jpg';
import three from '../../../assets/three.jpg';


const Banner = () => {
  return (
    <>
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="h-[700px]">
        <SwiperSlide>
          <img src={one} alt="" />
          <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-white text-center'>
            <h1 className='text-5xl mb-3'>Cambodia</h1>
            <p>Swiper React is a React component that allows you to implement Swiper in your React project.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" />
          <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-white text-center'>
            <h1 className='text-5xl mb-3'>Thailand</h1>
            <p>Swiper React is a React component that allows you to implement Swiper in your React project.</p>
          </div>        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
          <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-white text-center'>
            <h1 className='text-5xl mb-3'>Maldieves</h1>
            <p>Swiper React is a React component that allows you to implement Swiper in your React project.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner