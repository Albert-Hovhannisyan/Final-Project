import axios from "axios";
import { useCallback, useState } from "react";
import RegisterFormComponent from "../Components/RegisterFormComponent";
import { useNavigate } from "react-router-dom";

function Register() {
  const [users, setUsers] = useState([]);
  
  let navigate = useNavigate();

  const registerUser = useCallback(async (data) => {
    try{
    const result = await axios.post("http://localhost:3001/users/register", data);
    const token = result.data[0];
    const role = result.data[1];
    const name = result.data[2]
    console.log(result.data);
    setUsers(name);
    if (token) {
      localStorage.setItem("x-access-token", JSON.stringify(token));
      navigate("/user");
    }
  }catch(error){
    alert(error)
  }
  }, []);

  return (
    <RegisterFormComponent submitHandler={registerUser} />
  );
}

export default Register;
