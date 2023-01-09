import React from 'react';
import node from '../images/node-js.svg';
import php from '../images/php.svg';
import lara from '../images/laravel.svg';
import python from '../images/python.svg';


function Backend() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 mx-44 justify-items-center mb-5'>
                <div className='mx-5 mt-5 bg-white rounded-lg p-5 w-52 h-52 shadow-md'>
                    <img src={node} alt="" />
                </div>
                <div className='mx-5 mt-5  bg-white rounded-lg p-5 w-52 h-52 shadow-md'>
                    <img src={php} alt="" />
                </div>
                <div className='mx-5 mt-5  bg-white rounded-lg p-5 w-52 h-52 shadow-md'>
                    <img src={lara} alt="" />
                </div>
                <div className='mx-5 mt-5  bg-white rounded-lg p-5 w-52 h-52 shadow-md'>
                    <img src={python} alt="" />
                </div>
            </div>



        </div>
    )
}

export default Backend