import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
    return (
        <>
            <div className='mt-20'>
                <h1 className='mt-4 pt-5 mb-2 text-center capitalize text-4xl'>Our Customers Love Us. Here’s Why.</h1>
                <hr className='w-1/5 mx-auto  border-2' />
                <Carousel>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div className='p-5 border'>
                            <h4>Andrei Popa</h4>
                            <p className="">Our second large project with Vasundhara Infotech. They have proven over time a dedication and passion to the project second to none. We are currently working and will carry on with them for the years to come.</p>
                        </div>
                        <div className='p-5 border'>
                            <h4>Andrei Popa</h4>
                            <p className="">Our second large project with Vasundhara Infotech. They have proven over time a dedication and passion to the project second to none. We are currently working and will carry on with them for the years to come.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='p-5 border'>
                            <h4>Andrei Popa</h4>
                            <p className="">Our second large project with Vasundhara Infotech. They have proven over time a dedication and passion to the project second to none. We are currently working and will carry on with them for the years to come.</p>
                        </div>
                        <div className='p-5 border'>
                            <h4>Andrei Popa</h4>
                            <p className="">Our second large project with Vasundhara Infotech. They have proven over time a dedication and passion to the project second to none. We are currently working and will carry on with them for the years to come.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Testimonials




//  <div className='bg-slate-300'>
//
// </div>