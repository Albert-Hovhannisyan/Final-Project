import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LogInFormComponent from "../Components/LogInFormComponent";
import RegisterFormComponent from "../Components/RegisterFormComponent";
import AppBarComponent from "../Components/AppBarComponent";
import Header from "../Components/Header";
import AdminAppBarComponent from "../Components/AdminAppBarComponent";
import UserAppBarComponent from "../Components/UserAppBarComponent";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  // const getUsers = useCallback(async () => {
  //   const result = await axios.get(`http://localhost:3001/users/`, {
  //     headers: Header(),
  //   });
  //   console.log(result);
  // }, []);

  // const createUser = useCallback(async (data) => {
  //   const result = await axios.post(
  //     "http://localhost:3001/users/register",
  //     data
  //   );
  //   if (result.data) {
  //     localStorage.setItem("x-access-token", JSON.stringify(result.data));
  //   }
  //   setUsers(result.data);
  //   return <AdminAppBarComponent />;
  // }, []);

  const logIn = useCallback(async (data) => {
    const result = await axios.post("http://localhost:3001/users/login", data);
    const token = result.data[0];
    const role = result.data[1];
    const name = result.data[2]
    console.log(result.data);

    setUsers(name);

    if (token) {
      localStorage.setItem("x-access-token", JSON.stringify(token));
      localStorage.setItem("role", JSON.stringify(role));
    }
    
    if (role == "admin") {
      console.log("ADMIN");
      navigate("/admin");
    } else {
      console.log("USER");
      navigate("/user");
    }
  }, []);

  return (
    <div>
      <LogInFormComponent submitHandler={logIn} />
      {/* <RegisterFormComponent submitHandler={createUser}/> */}
    </div>
  );
}
export default LogIn;
