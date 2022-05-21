import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import RegisterFormComponent from "../Components/RegisterFormComponent";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function Register() {
  const [users, setUsers] = useState([]);
  
  let navigate = useNavigate();
  // const getUser = useCallback(async () => {
  //     const result = await axios.get(`http://localhost:3001/users/`, { headers: Header() });
  //     console.log(result);
  //     // fetchUsers();
  // }, [])

  // const createUser = useCallback(async (data) => {
  //     await axios.post('http://localhost:3001/users', data);
  //     // fetchUsers();
  // }, [])

  const registerUser = useCallback(async (data) => {
    console.log(data);
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
  }, []);

  return (
    <div>
      <div>
        <RegisterFormComponent submitHandler={registerUser} />
      </div>
    </div>
  );
}

export default Register;
