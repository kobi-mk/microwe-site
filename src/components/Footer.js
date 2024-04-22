import React from 'react'
import logo from '../assets/logo1.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();

    function onSubmitToContect() {
        navigate1('/contact')
    }
    function onSubmitToHome() {
        navigate2('/')
    }
    return (
        <footer className="container mx-auto">
            <div className="bg-gray-700 text-white py-4 lg:px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Left Section */}
                    <div className="flex space-x-4 md:ml-14 p-3 ">
                        <div className='flex flex-col space-y-5'>
                            {/* inner top */}
                            <div className='flex'>
                                <img onClick={onSubmitToHome} src={logo} alt='logo' className="w-20 h-16 cursor-pointer" />
                                <h1 onClick={onSubmitToHome} className="text-2xl font-mono pl-3 cursor-pointer">Microwe Fried Meals</h1>
                            </div>
                            {/* inner down */}
                            <div className='flex flex-grow justify-center'>
                                <div className='flex flex-col space-y-2'>
                                    <div className='flex space-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <p>10-14 Perent Road <br /> Colombo, W11 1EN <br /> Srilanka.</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                        <p>0205 334 3671</p>
                                    </div>
                                    <div className='flex space-x-3' >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <p>samplemail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex justify-between md:items-center">
                        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-12 md:space-x-4 lg:space-x-16 xl:space-x-28 md:mx-0 lg:mr-20 xl:mr-32 text-white p-4 ">
                            <div className='flex flex-col space-y-1 mx-auto'>
                                <span className='uppercase text-base sm:text-xs xl:text-base font-semibold tracking-wide sm:mb-3 -ml-3'>quick links</span>
                                <span>About us</span>
                                <span onClick={onSubmitToContect} className='cursor-pointer'>Contact us</span>
                                <span>Career</span>
                                <span>Check-list</span>
                            </div>
                            <div className='flex flex-col space-y-1 mx-auto'>
                                <span className='uppercase text-base sm:text-xs xl:text-base font-semibold tracking-wide sm:mb-3 -ml-3'>important links</span>
                                <span>Payment policy</span>
                                <span>Privacy policy</span>
                                <span>Cookie policy</span>
                                <span>Terms & Conditions</span>
                            </div>
                            <div className='flex flex-col space-y-1 mx-auto'>
                                <span className='uppercase text-base sm:text-xs xl:text-base font-semibold tracking-wide sm:mb-3 -ml-1'>quick links</span>
                                <span>Visit Example</span>
                                <span>Visit Example</span>
                                <span>Visit Example</span>
                                <span>Visit Example</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className="bg-gray-900 text-white py-4 px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Left Section */}
                    <div className="flex flex-col space-x-4 -ml-6 sm:ml-6 lg:ml-14 lg:w-1/2 bg-gray-900 p-3 space-y-5">
                        {/* inner top */}
                        <div className='flex'>
                            <h1 className="text-2xl font-serif pl-3 ">Join Our Newsletter</h1>
                        </div>
                        {/* inner middle */}
                        <div className="flex">
                            <input type="text" id='subscribe' className="mr-4 py-2  sm:px-28 rounded bg-gray-400" />
                            <span className="text-base font-bold bg-gray-200 hover:bg-gray-700 text-black hover:text-white tracking-wider hover:border-2 py-1 sm:px-4 rounded border-2">
                                <button>Subscribe</button>
                            </span>
                        </div>
                        {/* inner down */}
                        <div className='flex 2xl:mr-32 '>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellat. Voluptas autem repudiandae libero, iure consequuntur quisquam id molestiae magnam alias ratione animi fugit enim. Ducimus doloremque in saepe sint, minima libero eaque a! Praesentium esse vero numquam officia optio!</p>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex pt-12 lg:w-1/2  items-end justify-end space-x-4">
                        <div className='flex flex-col space-y-4'>
                            <div className='flex space-x-4 lg:pr-4 xl:pr-16'>
                                <p onClick={onSubmitToContect} className='cursor-pointer'>CONNECT US</p>
                                <p>|</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </div>
                            <p className="text-sm ">&copy;{new Date().getFullYear()} Microwe Fried Meals. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer