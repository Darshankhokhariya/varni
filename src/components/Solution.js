import React from 'react';
import education from '../images/asset 30.gif';
import logistic from '../images/asset 31.gif';
import Game from '../images/asset 32.gif';
import Ecom from '../images/asset 33.gif';
import Mplace from '../images/asset 34.gif';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Solution() {

    return (
        <>
          <div className='bg-[#f1f5f9]'>
          <div class="owl-carousel owl-theme">
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5'>
                    <img src={education} alt=""/>
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5'>
                    <img src={logistic} alt=""/>                 
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5'>
                    <img src={Game} alt=""/>
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5'> 
                    <img src={Ecom} alt=""/>                
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5'> 
                    <img src={Mplace} alt=""/>
                </div>
            </div>
          </div>

        </>

    )
}

export default Solution