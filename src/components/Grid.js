import React, { useEffect, useState } from "react";
import GridProduct from "./GridProduct";

const Grid = () => {
    const [products, setProducts] = useState([]);
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3500/grid'); // Here I used fetch API to GET data from JSON server
                // console.log(response);
                if (!response.ok) throw Error("Data not received")
                const data = await response.json();
                // console.log(data);
                setProducts(data);
                // console.log(products);
                setFetchError(null)
            } catch (error) {
                setFetchError(error.message)
                // console.log(error.message);
            }
        };

        (async () => await fetchData())()
    }, []);

    return (
        <div className="container mx-auto bg-gray-400 pt-4 -m-1">
            <div className="text-center">
                <h1 className="text-4xl font-bold m-2 pb-6">What do we have?</h1>
                {/* if error occurs display message to users */}
                {fetchError && <span className="text-red-500 font-bold text-6xl bg-gray-500 px-4 py-4 mt-8 flex justify-center">There is no feature products to show!!!</span>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 xl:gap-y-2 2xl:gap-1 px-5 py-8 ">
                {products.map((product) => (
                    <GridProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Grid
