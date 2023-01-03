import React from 'react'

function Etc() {
  return (
    <div>
        
     <div className='container mt-5 '>
     <div className="flex row-auto justify-evenly        ">
         {/* card-1 */}
         <div className='col-span-4 mt-52'>
             <h1>Our Services</h1>
             <br />
             <span className=''>As one of the leading software development <br /> companies, we at Vasundhara have a diverse <br /> range of services for our clients, where we <br /> operate in these core areas services.</span>
         </div>
         {/* card-2 */}
         <div className='col-span-4 bg-[#ffe4c2] p-3  rounded-lg border-2-slate-800 h-80 mt-32 w-96'>
             <div className='bg-[#fcd09a] w-28 p-3 rounded m-auto'>
                 <img src={mobileapp} alt="" className='m-auto  w-24' />
             </div>
             <div className='text-center mt-4'>
                 <h2 className='text-center text-2xl font-normal'>Mobile App Development</h2>
                 <span className='text-center '>We can assist you with user-friendly, interactive <br />  and feature-rich mobile app development <br />  services to enable your digital growth.</span>
                 <h2 className='text-center text-2xl mt-3 font-normal'>learn more</h2>
             </div>
         </div>
         {/* card-3 */}
         <div className='col-span-4 bg-[#e5dcff] p-3 rounded-xl border-2-slate-800 h-96 w-96'>
             <div className='bg-[#d2c2ff] w-28 p-3 rounded m-auto'>
                 <img src={mobileapp} alt="" className='bg-[#d2c2ff] m-auto w-24 ' />
             </div>
             <div className='text-center mt-4'>
                 <h2 className='text-center text-2xl font-normal'>Game Development</h2>
                 <span className='text-center'>We are a leading game development company in <br /> India that deploys cutting edge technologies to <br /> build and deliver some of the most successful <br /> games in the industry</span>
                 <h2 className='text-center text-2xl mt-3 font-normal'>learn more</h2>
             </div>
         </div>
     </div>                            {/* raw-2 */}

    <div className="flex row-auto justify-between">
        {/* card-1 */}
        <div className='col-span-4 bg-[#ffd2e5] p-3 rounded-lg border-2-slate-800 h-80 w-96'>
            <div className='bg-[#ffbeda] w-28 p-3 rounded m-auto'>
                <img src={mobileapp} alt="" className=' m-auto  w-24' />
            </div>
            <div className='text-center mt-4'>
                <h2 className='text-center text-2xl font-normal'>Mobile App Development</h2>
                <span className='text-center '>We can assist you with user-friendly, interactive <br />  and feature-rich mobile app development <br />  services to enable your digital growth.</span>
                <h2 className='text-center text-2xl mt-3 font-normal'>learn more</h2>
            </div>
        </div>
        {/* card-2 */}
        <div className='col-span-4 bg-[#cfe9ff] p-3 rounded-lg border-2-slate-800 h-80 mt-14 w-96'>
            <div className='bg-[#b4dfff] w-28 p-3 rounded m-auto'>
                <img src={mobileapp} alt="" className=' m-auto  w-24' />
            </div>
            <div className='text-center mt-4'>
                <h2 className='text-center text-2xl font-normal'>Mobile App Development</h2>
                <span className='text-center '>We can assist you with user-friendly, interactive <br />  and feature-rich mobile app development <br />  services to enable your digital growth.</span>
                <h2 className='text-center text-2xl mt-3 font-normal'>learn more</h2>
            </div>
        </div>
        {/* card-3 */}
        <div className='col-span-4 bg-[#e5dcff] p-3 rounded-xl border-2-slate-800 h-96 w-96'>
            <div className='bg-[#d2c2ff] w-28 p-3 rounded m-auto'>
                <img src={mobileapp} alt="" className='bg-[#d2c2ff] m-auto w-24 ' />
            </div>
            <div className='text-center mt-4'>
                <h2 className='text-center text-2xl font-normal'>Game Development</h2>
                <span className='text-center'>We are a leading game development company in <br /> India that deploys cutting edge technologies to <br /> build and deliver some of the most successful <br /> games in the industry</span>
                <h2 className='text-center text-2xl mt-3 font-normal'>learn more</h2>
            </div>
        </div>
    </div>



    </div></div>
  )
}

export default Etc