import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import one from '../../../assets/one.jpg';
import two from '../../../assets/two.jpg';
import three from '../../../assets/three.jpg';


const Banner = () => {
  return (
    <>
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <img src={one} alt="" />
          <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-white text-center'>
            <div className='lg:w-1/2 md:w-2/3 sm:w-3/4 max-sm:w-4/5 px-3 m-auto'>
              <h1 className='text-5xl mb-3'>Cambodia</h1>
              <p>Cambodia is a country of north Asia. Thailand is a neighbour country. It's a great country to explore.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" />
          <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-white text-center'>
            <div className='lg:w-1/2 md:w-2/3 sm:w-3/4 max-sm:w-4/5 px-3 m-auto'>
              <h1 className='text-5xl mb-3'>Thailand</h1>
              <p>Thailand is the most visited country in asia. Many island with luxuarius hotels and beaches, etc</p>
            </div>
          </div>        
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
          <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-white text-center'>
            <div className='lg:w-1/2 md:w-2/3 sm:w-3/4 max-sm:w-4/5 px-3 m-auto'>
              <h1 className='text-5xl mb-3'>Maldives</h1>
              <p>The Maldives is a dreamscape of crystal-clear waters, vibrant coral reefs, and luxury overwater villas</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner