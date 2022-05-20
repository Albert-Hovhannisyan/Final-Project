import axios from "axios";
import { useCallback, useEffect, useState } from "react";

async function GetProducts(){
        const result = await axios.get(`http://localhost:3001/products`);
        return result.data
}

export default GetProducts