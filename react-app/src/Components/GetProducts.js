import axios from "axios";
import { useCallback, useEffect, useState } from "react";

async function GetProducts(){
        const result = await axios.get(`http://localhost:3001/products`);
        return result.data
}
// function GetProducts() {

//         const products = useCallback(async () => {
//                 const result = await axios.post('http://localhost:3001/products');
//                 console.log('ffff', result)
//                 return result;
//         }, [])

//         return products;

// }

export default GetProducts