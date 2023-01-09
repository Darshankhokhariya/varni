import React from 'react';
import education from '../images/asset 30.gif';
import logistic from '../images/asset 31.gif';
import Game from '../images/asset 32.gif';
import Ecom from '../images/asset 33.gif';
import Mplace from '../images/asset 34.gif';

function Learn() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 justify-items-center'>
            <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                <img src={education} alt="" />
                <h2 className='text-center text-xl'>Education</h2>
            </div>
            <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                <img src={logistic} alt="" />
                <h2 className='text-center text-xl'>Logistic</h2>
            </div>
            <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                <img src={Game} alt="" />
                <h2 className='text-center text-xl'>Game</h2>
            </div>
            <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                <img src={Ecom} alt="" />
                <h2 className='text-center text-xl'>E-commerce</h2>
            </div>
            <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                <img src={Mplace} alt="" />
                <h2 className='text-center text-xl'>Marketplace</h2>
            </div>
        </div>
    )
}

export default Learn