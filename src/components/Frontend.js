import React from 'react';
import angular from '../images/anguler.svg';
import react from '../images/react.svg';
import js from '../images/js.svg';
import bootstrap from '../images/bootstrap.svg';


function Frontend() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 mx-44 justify-items-center mb-5'>
                <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                    <img src={angular} alt="" />
                </div>
              
                <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                    <img src={react} alt="" />
                </div>
                <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                    <img src={js} alt="" />
                </div>
                <div className='mx-5 mt-5 w-52 h-52  bg-white rounded-lg p-5 shadow-md'>
                    <img src={bootstrap} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Frontend