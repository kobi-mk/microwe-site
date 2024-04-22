import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        options: "default",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const form = useRef();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
        //console.log(`${name}:${value}`);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Form Validation 
        const validationErrors = {}
        if (!formData.firstName.trim()) {
            validationErrors.firstName = "First name is required"
        }
        if (!formData.lastName.trim()) {
            validationErrors.lastName = "Last name is required"
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {  // Regex Allows Letters , Dot(within the local part), Numbers, Underscore, Hyphen
            validationErrors.email = "Email is not valid"
        }
        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = "Phone number is required"
        } else if (!/^\d[\d -]+$/.test(formData.phoneNumber)) {  // Regex Allows digits, spaces, and hyphens
            validationErrors.phoneNumber = "Phone number is not valid"
        }
        if (!formData.options.trim() || (formData.options.trim() === "default")) {
            validationErrors.options = "Must select an option"
        }
        if (!formData.message.trim()) {
            validationErrors.message = "Message is required"
        }

        setErrors(validationErrors)
        // console.log(validationErrors);
        // console.log(Object.keys(validationErrors).length);

        if (Object.keys(validationErrors).length === 0)  //Check if no error then POST to database
            {
                //alert("Form submitted successfully") // Regular JS method
                toast.success('Form submitted successfully', { //Using react-toastify when submitted successfully
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",

                });
                // send mail using @emailjs/browser
                emailjs.sendForm('service_cmixl3p', 'template_39qi7uh', form.current, { publicKey: 'foiSy-3564LWwBNJB', })
                    .then(
                        () => {
                            console.log('SUCCESS!');
                        },
                        (error) => {
                            console.log('FAILED...', error.text);
                        }
                    );

                setFormData({ // After submition reset the form fields
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    options: "default",
                    message: ""
                });
            } 


        };
        return (
            <div className="container mx-auto px-4 sm:px-24 lg:px-40 py-8">
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mb-6 mt-8">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="labels" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className={`inputs ${errors.firstName ? 'border-red-500' : 'border-gray-700'}`}
                                name="firstName"
                                id="firstName"
                                type="text"
                                autoComplete="off"
                                placeholder="Kovarthan"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <span className="text-red-500 font-semibold flex justify-center">{errors.firstName}</span>}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="labels" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className={`inputs ${errors.lastName ? 'border-red-500' : 'border-gray-700'}`}
                                name="lastName"
                                id="lastName"
                                type="text"
                                autoComplete="off"
                                placeholder="Mahendram"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <span className="text-red-500 font-semibold flex justify-center">{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="labels" htmlFor="email">
                                Email
                            </label>
                            <input
                                className={`inputs ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                                name="email"
                                id="email"
                                type="email"
                                autoComplete="off"
                                placeholder="kovarthan@microwe.net"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="text-red-500 font-semibold flex justify-center">{errors.email}</span>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="labels" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input
                                className={`inputs ${errors.phoneNumber ? 'border-red-500' : 'border-gray-700'}`}
                                name="phoneNumber"
                                id="phoneNumber"
                                type="tel"
                                autoComplete="off"
                                placeholder="0094-XXXXXXXXX"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            {errors.phoneNumber && <span className="text-red-500 font-semibold flex justify-center">{errors.phoneNumber}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3">
                            <label className="labels" htmlFor="options">
                                Select the option
                            </label>
                            <select
                                className={`inputs ${errors.options ? 'border-red-500' : 'border-gray-700'}`}
                                name="options"
                                id="options"
                                value={formData.options}
                                onChange={handleChange}
                            >
                                <option value="default" disabled>Select the option</option>
                                <option value="order">Product order support</option>
                                <option value="complient">Complients</option>
                                <option value="meet">Get an appoinment</option>
                            </select>
                            {errors.options && <span className="text-red-500 font-semibold flex justify-center">{errors.options}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3">
                            <label className="labels" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className={`inputs ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                                name="message"
                                id="message"
                                rows="5"
                                placeholder="Type your message..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="text-red-500 font-semibold flex justify-center">{errors.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3">
                            <button
                                type="submit"
                                className="btn-form"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        );
    };

    export default Contact;
