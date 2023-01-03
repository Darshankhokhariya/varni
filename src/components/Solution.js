import React from 'react';
import education from '../images/asset 30.gif';
import logistic from '../images/asset 31.gif';
import Game from '../images/asset 32.gif';
import Ecom from '../images/asset 33.gif';
import Mplace from '../images/asset 34.gif';

function Solution() {
  return (
    <>
    <div className='bg-[#f1f5f9]'>
    <h1 className='mt-4 pt-5 mb-2 text-center capitalize text-4xl'>Developing Software Solutions For Diverse Verticals</h1>
    <hr className='w-1/5 mx-auto  border-2' />  
        
        <div className='grid grid-cols-1 lg:grid-cols-5 justify-items-center mt-7 p-5'>

            <div className='w-auto bg-white rounded-lg p-5 hover:bg-[#e5f0fd] hover:border-[#0093ed] duration-300'>
                <div className='rounded'>
                    <img src={education} alt="" width='130' height='130' className='m-auto'/>
                </div>
                <h4 className='text-center text'>Education</h4>
            </div>
            <div className='w-auto bg-white rounded-lg p-5'>
                <div className='rounded'>
                    <img src={logistic} alt="" width='130' height='130' className='m-auto'/>
                </div>
                <h4 className='text-center text'>Logistic</h4>
            </div>
            <div className='w-auto bg-white rounded-lg p-5'>
                <div className='rounded'>
                    <img src={Game} alt="" width='130' height='130' className='m-auto'/>
                </div>
                <h4 className='text-center text'>Game</h4>
            </div>
            <div className='w-auto bg-white rounded-lg p-5'>
                <div className='rounded'>
                    <img src={Ecom} alt="" width='130' height='130' className='m-auto'/>
                </div>
                <h4 className='text-center text'>E-Commerce</h4>
            </div>
            <div className='w-auto bg-white rounded-lg p-5'>
                <div className='rounded'>
                    <img src={Mplace} alt="" width='130' height='130' className='m-auto'/>
                </div>
                <h4 className='text-center text mt-2'>Marketplace</h4>
            </div>





        </div>
        
    
    
    </div>    
    </>
    
  )
}

export default Solution