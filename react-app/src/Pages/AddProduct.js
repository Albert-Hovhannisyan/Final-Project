import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductFormComponent from "../Components/ProductFormComponent";

function Products() {
    
  const AddProduct = useCallback(async (data) => {
    const result = await axios.post("http://localhost:3001/products", data);
    GetProducts()
  }, []);

  const GetProducts = useCallback(async () => {
    const result = await axios.get(`http://localhost:3001/products`);
    const product = result.data
    product.map((a) => LogProducts(a.name))
  }, []);

  const LogProducts = (product) => {
    console.log(product);
  }

  return <ProductFormComponent submitHandler={AddProduct} />;
}
export default Products;
