
import React from 'react';
import card1 from '../images/card 1.svg';
import card2 from '../images/card2.svg';  
import card3 from '../images/card3.svg';
import card4 from '../images/card4.svg';


function Card() {
  return (
    <div className="bg-white">
    <div className="container xl:max-w-7xl  py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center text-gray-400">
        <div className="px-2 h-28 flex items-center justify-center">
          <div className="inline-flex items-center space-x-2 text-2xl font-semibold w-20">
            <img src={card1} alt="" />
            <span>boxspot</span>
          </div>
        </div>
        <div className="px-2 h-28 flex items-center justify-center ">
          <div className="inline-flex items-center space-x-2 text-2xl font-light w-20">
            <img src={card2} alt="" />
            <span>TechCode</span>
          </div>
        </div>
        <div className="px-2 h-28 flex items-center justify-center">
          <div className="inline-flex items-center space-x-2 text-2xl font-bold w-20">
           <img src={card3} alt="" />
            <span>cCLICK</span>
          </div>
        </div>
        <div className="px-2 h-28 flex items-center justify-center">
          <div className="inline-flex items-center space-x-2 text-3xl w-20">
            <img src={card4} alt="" /> 
            <span>freshloc</span>
          </div>
        </div>
      </div>
    </div>
  </div>
   
  )
}

export default Card;





{/* <div className='upwork py-5 border-b-2 w-full'>
<div className='container flex justify-around align-center'>
  <div className='flex'><img src={card1} alt="" />
    <span className='capitalize text-lg text-center flex m-auto'>9+ year in industry</span>
  </div>
  <div className='flex justify-between'><img src={card2} alt="" />
    <span className='capitalize text-lg text-center flex m-auto'> 2x growth rate</span>  
  </div>
  <div className='flex'><img src={card3} width='100px' height='90px' alt="" />
    <span className='capitalize text-lg text-left  flex m-auto'>300+ expert professionals</span>
  </div>
  <div className='flex '><img src={card4} alt="" />
    <span className='capitalize text-lg text-center flex m-auto'>610+ project delivered</span>
  </div>
</div>  
</div> */}