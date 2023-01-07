import React from 'react';
import {Link} from 'react-router-dom';

function Technologi() {
    return (
        <div className='h-20 w-full bg-white  flex border-b-2 items-center mt-5'>
                 <div className='flex m-auto items-center'>
                    <Link to='/design' className='no-underline text-black'><div className='mx-4  text-xl hover:text-[#0093ed] hover:border-b-2 transition duration-100'>Design</div></Link>
                    <Link to='/frontend' className='no-underline text-black'><div className='mx-4  text-xl hover:text-[#0093ed] hover:border-b-2 transition duration-100'>Frontend</div></Link>
                    <Link to='/backend' className='no-underline text-black'><div className='mx-4  text-xl hover:text-[#0093ed] hover:border-b-2 transition duration-100'>Backend</div></Link>
              
                </div>
        </div>
    )
}

export default Technologi