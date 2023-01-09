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
                        <div className='p-5 border'>
                            <h4>Andrei Popa</h4>
                            <p className="">Our second large project with Varni Infotech. They have proven over time a dedication and passion to the project second to none. We are currently working and will carry on with them for the years to come.</p>
                        </div>
                        <div className='p-5 border'>
                            <h4>Pedro L</h4>
                            <p className="">"I would lack words to define the excellent job they have done, I feel more than grateful ... I can say that all my projects I would recommend 100 x 100 to this team ... a million thanks"</p>
                        </div>
                        <div className='p-5 border'>
                            <h4>Iran Hadad</h4>
                            <p className="">varni Infotech is the best when it comes to mobile application development on varni vision. They have the huge experience and expertise team to be the best. Great Experience, the very professional and Excellent developers team, Highly recommend for mobile development services..</p>
                        </div>
                        <div className='p-5 border'>
                            <h4>Philip A.</h4>
                            <p className="">We've been working with VV for almost two years and this team is awesome! They always respond fast (sometimes even on weekends), and their ability to code is flawless, delivering very complex tasks in very short periods of time. We're very happy to work with this team and we'll continue to work together in the future.</p>
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