import React from 'react';
import angular from '../images/angular.png';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';

function Frontend() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 mx-44 justify-items-center mb-5'>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                    <img src={angular} width='200px' height='200px' className='mt-4' alt="" />
                    <div className='text-center  mt-5 text-xl font-semibold'>Angular</div>
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                    <img src={html} width='200px' height='200px' className='mt-3' alt="" />
                    <div className='text-center  mt-5 text-xl font-semibold'>HTML</div>
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                    <img src={css}  className='mt-4' alt="" />
                    <div className='text-center  mt-5 text-xl font-semibold'>CSS</div>
                </div>
                <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                    <img src={react} width='200px' height='200px' className='mt-4' alt="" />
                    <div className='text-center mt-5 text-xl font-semibold'>React</div>
                </div>
            </div>
        </div>
    )
}

export default Frontend