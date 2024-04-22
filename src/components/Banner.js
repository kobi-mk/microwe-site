import React from 'react'
import banner from '../assets/banner1.jpeg'

const Banner = () => {
    return (
        <>
            <div className='container mx-auto'>
                <img className="md:h-[600px] w-full object-cover" src={banner} alt="banner" />
            </div>
        </>
    )
}

export default Banner
