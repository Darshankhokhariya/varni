import React from 'react';
import mobileapp from '../images/asset 20.gif';
import web from '../images/asset 19.gif';
import nft from '../images/asset 21.gif';
import game from '../images/asset 22.gif';
import hire from '../images/asset 23.gif';




function Service() {
    return (
        <>
            <h1 className='mt-5 mb-2 text-center capitalize text-4xl'>our services</h1>


            <div className='grid grid-col-1 lg:grid-cols-3 justify-items-center '>
                {/* card-1 */}
                <div className="py-10">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm bg-[#ffe4c2] p-3">
                        <div className='flex align-middle justify-center mt-4 p-4'>
                            <img src={mobileapp} width='90' height='90' className='bg-[#fcd09a] p-2 rounded-lg' alt="mobile" />
                        </div>
                        <div>
                            <h4 className='text-center mt-3'>Mobile App Devlopment</h4>
                            <p className='text-center text-lg mt-4'>
                                We can assist you with user-friendly, interactive and feature-rich mobile app development services to enable your digital growth.
                            </p>
                            <p href="#" className='text-2xl no-underline text-center text-black'>Learn More</p>
                        </div>
                    </div>
                </div>
                {/* card-2 */}
                <div className="py-10">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm bg-[#ffd2e5] p-3 lg:mt-96">
                        <div className='flex align-middle justify-center mt-4 p-4'>
                            <img src={web} width='90' height='90' className='bg-[#ffbeda] p-2 rounded-lg' alt="mobile" />
                        </div>
                        <div>
                            <h4 className='text-center mt-3'>Web Development</h4>
                            <p className='text-center text-lg mt-4'>
                                 We help companies with unique and comprehensive web development services that empower you and your clients.
                                 to build your web site 
                            </p>
                            <p href="#" className='text-2xl no-underline text-center text-black'>Learn More</p>
                        </div>
                    </div>
                </div>
                {/* card-3*/}
                <div className="py-10">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm bg-[#e5dcff] p-3">
                        <div className='flex align-middle justify-center mt-4 p-4'>
                            <img src={game} width='90' height='90' className='bg-[#d2c2ff] p-2 rounded-lg' alt="mobile" />
                        </div>
                        <div>
                            <h4 className='text-center mt-3'>Game Development</h4>
                            <p className='text-center text-lg mt-4'>
                            We are a leading game development company in India that deploys cutting edge technologies to build and deliver some of the most successful games in the industry.
                            </p>
                            <p href="#" className='text-2xl no-underline text-center text-black'>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* raw-2 */}
            
            <div className='grid grid-col-1 lg:grid-cols-2  lg:gap-80 justify-items-center '>

                {/* card--4 */}
                <div className="py-10">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm bg-[#cfe9ff] p-3">
                        <div className='flex align-middle justify-center mt-4 p-4'>
                            <img src={nft} width='90' height='90' className='bg-[#b4dfff] p-2 rounded-lg' alt="mobile" />
                        </div>
                        <div>
                            <h4 className='text-center mt-3'>NFT Development</h4>
                            <p className='text-center text-lg mt-4'>
                            We have a team of professionals for designing NFT (Non-Fungible Token) which can be recorded using blockchain technology.
                            </p>
                            <p href="#" className='text-2xl no-underline text-center text-black'>Learn More</p>
                        </div>
                    </div>
                </div>
                {/* card-5 */}
                <div className="py-10">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm bg-[#bae9e4] p-3">
                        <div className='flex align-middle justify-center mt-4 p-4'>
                            <img src={hire} width='90' height='90' className='bg-[#addad5] p-2 rounded-lg' alt="mobile" />
                        </div>
                        <div>
                            <h4 className='text-center mt-3'>Hire Offshore Developers</h4>
                            <p className='text-center text-lg mt-4'>
                            Vasundhara provides software development services through a dedicated and skilled offshore development team across various technologies and frameworks.
                            </p>
                            <p href="#" className='text-2xl no-underline text-center text-black'>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Service