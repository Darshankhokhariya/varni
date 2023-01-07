import React from 'react';
import node from '../images/node.png';
import php from '../images/php.png';
import lara from '../images/laravel.png';

function Backend() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-44 justify-items-center mb-5'>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                    <img src={node} alt="" />
                    <div className='text-center  mt-5 text-2xl font-semibold'>Node js</div>
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                    <img src={php} alt="" />
                    <div className='text-center  mt-5 text-2xl font-semibold'>PHP</div>
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                    <img src={lara} alt="" />
                    <div className='text-center  mt-5 text-2xl font-semibold'>Laravel</div>
                </div>
            </div>



        </div>
    )
}

export default Backend