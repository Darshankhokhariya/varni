import React from 'react';
import psd from '../images/photoshop.svg';
import ilu from '../images/illustrator.svg';
import figma from '../images/figma.svg';
import maya from '../images/maya.svg';


function Design() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:mx-60 justify-items-center mb-5'>
                    <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                        <img src={psd} alt="" />
                    </div>
                    <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                        <img src={ilu} alt="" />
                    </div>
                    <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                        <img src={figma} alt="" />
                    </div>
                    <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                        <img src={maya} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Design