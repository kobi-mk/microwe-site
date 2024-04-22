import React from 'react'

const FlexProduct = ({ product }) => {
    return (
        <div key={product.id} className="flex flex-col space-y-3 py-5 md:w-1/3 px-3">
            <img src={product.img} className="h-72 md:h-72 xl:h-96 w-72 md:w-72 xl:w-96 object-cover rounded-lg mb-2 mx-auto" alt={product.title} />
            <p className='text-lg font-bold text-center'>{product.title}</p>
            <p className='text-center text-wrap overflow-wrap break-words'>{product.content}</p>
            <div className="flex flex-col lg:flex-row md:justify-between space-y-3 lg:space-y-0 lg:mx-auto lg:space-x-4">
                <button className="shopping  bg-red-600 hover:bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    Buy Now
                </button>
                <button className="shopping bg-orange-600 hover:bg-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default FlexProduct