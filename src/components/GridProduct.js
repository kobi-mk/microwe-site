import React from 'react'

const GridProduct = ({ product }) => {
    // console.log(product);
    return (
        <div key={product.id} className="flex flex-col items-center justify-center mx-auto pb-5">
            <img src={product.img} className="h-60 md:h-56 xl:h-72 w-72 md:w-72 xl:w-96 object-cover rounded-lg mb-2" alt={product.title} />
            <p className='text-lg font-bold text-center'>{product.title}</p>
            <p className='text-center text-wrap m-4 break-words'>{product.content}</p>
        </div>
    )
}

export default GridProduct