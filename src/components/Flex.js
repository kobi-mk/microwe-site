// import React, { useEffect, useState } from 'react';
import FlexProduct from './FlexProduct';
// import axios from 'axios';

const Flex = () => {
    // const [products, setProducts] = useState([]);
    // const [fetchError, setFetchError] = useState(null)

    const products = [{
        "id": "pd1",
        "title": "Tasty Pizza",
        "content": "It's hot, and succulent at the same time. It's truly a wonderful taste when you take first bite and the sound it makes.",
        "img": "./images/pizza.jpeg"
      },
      {
        "id": "pd2",
        "title": "Cheesy Burger",
        "content": "Crispy seasoned chicken breast, topped with melted cheese, piled onto soft rolls with onion, tomato and garlic mayo.",
        "img": "./images/burger.jpeg"
      },
      {
        "id": "pd3",
        "title": "Spicy Shawarma",
        "content": "Fiery Chicken Shawarma: slow-roasted for smoky flavor. Packed with a spicy kick and cooled by creamy tahini.",
        "img": "./images/sawarma.jpeg"
      }]

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3500/flex'); // Here I used Axios to GET data from JSON server
    //             // console.log(response);
    //             const data = await response.data;
    //             // console.log(data);
    //             // setProducts(data); //whole data comes
    //             setProducts(data.slice(0, 3)); // Use slice to get the first 3 items
    //             // console.log(products);
    //             setFetchError(null)
    //         } catch (error) {
    //             setFetchError(error.message)
    //             // console.log(fetchError);
    //         }
    //     };

    //     (async () => await fetchData())()
    // }, []);

    return (
        <div className='container mx-auto bg-gray-400'>
            <div className="flex flex-col md:flex-row justify-center items-center pt-14 pb-10">
                <div className="text-center">
                    <h1 className="text-4xl font-bold m-2">Our featured products.</h1>
                    {/* if error occurs display message to users */}
                    {/* {fetchError && <span className="text-red-500 font-bold text-6xl bg-gray-500 px-4 py-4 mt-8 flex justify-center">There is no feature products to show!!!</span>} */}
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly space-x-4 px-7 pb-14 pt-7">
                {products.map((product) => (
                    <FlexProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Flex;
