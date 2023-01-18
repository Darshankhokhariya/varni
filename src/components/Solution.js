import React from 'react';
import education from '../images/asset 30.gif';
import logistic from '../images/asset 31.gif';
import Game from '../images/asset 32.gif';
import Ecom from '../images/asset 33.gif';
import Mplace from '../images/asset 34.gif';
import 'swiper/css';
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';;


function Solution() {

    return (
        <>
            <div className='bg-[#f1f5f9] justify-items-center p-5 border-2'>
                <h1 className='mt-4 pt-5 mb-2 text-center capitalize text-4xl'>Developing Software Solutions For Diverse Verticals</h1>
                <hr className='w-1/5 mx-auto  border-2' />
                <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    modules={[FreeMode]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }
                    }
                >
                    <SwiperSlide>
                        <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                            <img src={logistic} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                            <img src={Game} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                            <img src={Ecom} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                            <img src={Mplace} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='text-center'>
                    <button className='p-3 py-2 px-4 mt-5 border-2 rounded-full  text-[#0093ed] bg-white '>Learn More</button>
                </div>
            </div>

        </>

    )
}

export default Solution