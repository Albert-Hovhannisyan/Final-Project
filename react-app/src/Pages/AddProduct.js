import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductFormComponent from "../Components/ProductFormComponent";

function Products() {
    
  const AddProduct = useCallback(async (data) => {
    const result = await axios.post("http://localhost:3001/products", data);
    GetProducts()
    console.log(result.data);
  }, []);

  const GetProducts = useCallback(async () => {
    const result = await axios.get(`http://localhost:3001/products`, {
    });
    console.log(result.data);
  }, []);

  return <ProductFormComponent submitHandler={AddProduct} />;
}
export default Products;
