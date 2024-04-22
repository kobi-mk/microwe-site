import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo1.png'

const Header = () => {
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();

    function onSubmitToContect(){
        navigate1('/contact')
    }
    function onSubmitToHome(){
        navigate2('/')
    }
    return (
        <header className="container mx-auto bg-gray-800 text-white px-8 py-4 h-20">
            <div className="flex justify-between">

                <img onClick={onSubmitToHome} className="w-16 h-12 cursor-pointer" src={logo} alt="logo" />
                {/* <span ><button  className="btn">Logo</button></span> */}
                <span className="btn hover:bg-white hover:text-black border-2 border-white">
                    <button onClick={onSubmitToContect}>Contact us</button>
                </span>
            </div>
        </header>
    )
}

export default Header
