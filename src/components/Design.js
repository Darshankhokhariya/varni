import React from 'react';
import psd from '../images/photoshop.svg';
import ilu from '../images/illustrator.svg';
import figma from '../images/figma.svg';

function Design() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-60 justify-items-center mb-5'>
                    <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                        <img src={psd} alt="" />
                        <div className='text-center  mt-5 text-xl font-semibold'>Photoshop</div>
                    </div>
                    <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                        <img src={ilu} alt="" />
                        <div className='text-center  mt-5 text-xl font-semibold'>illustrator</div>
                    </div>
                    <div className='mx-5 mt-5 w-auto  bg-white rounded-lg p-5 shadow-md'>
                        <img src={figma} alt="" />
                        <div className='text-center  mt-5 text-xl font-semibold'>Figma</div>
                    </div>
            </div>
        </div>
    )
}

export default Design