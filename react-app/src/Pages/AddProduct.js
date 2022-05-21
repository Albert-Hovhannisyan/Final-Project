import axios from "axios";
import { useCallback} from "react";
import ProductFormComponent from "../Components/ProductFormComponent";
import Header from "../Components/Header";

function Products() {
    
  const AddProduct = useCallback(async (data) => {
    const result = await axios.post("http://localhost:3001/products/create", data, { headers: Header() });
    console.log(result);
  }, []);

  return <ProductFormComponent submitHandler={AddProduct} />;
}
export default Products;
