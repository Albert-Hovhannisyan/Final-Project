import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LogInFormComponent from "../Components/LogInFormComponent";
import RegisterFormComponent from "../Components/RegisterFormComponent";
import AppBarComponent from "../Components/AppBarComponent";
import Header from "../Components/Header";
import AdminAppBarComponent from "../Components/AdminAppBarComponent";
import UserAppBarComponent from "../Components/UserAppBarComponent";
import { Navigate } from "react-router-dom"
function LogIn() {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const result = await axios.get(`http://localhost:3001/users/`, {
      headers: Header(),
    });
    console.log(result);
  }, []);

  const createUser = useCallback(async (data) => {
      const result = await axios.post('http://localhost:3001/users/register', data);
      if (result.data) {
        localStorage.setItem("x-access-token", JSON.stringify(result.data));
      }
      setUsers(result.data)
      return <AdminAppBarComponent/>
  }, [])

  const logIn = useCallback(async (data) => {
    const result = await axios.post("http://localhost:3001/users/login", data);
    console.log(result.data);
    const token = result.data[0]
    const role = result.data[1]
    //setUsers(token);
    if (token) {
      localStorage.setItem("x-access-token", JSON.stringify(token));
    }
    if(role == "admin"){
      console.log("ADMIN");
      <Navigate to="/admin" true/>
      // return <Link to="/admin"/>
    }
    else{
      return <UserAppBarComponent/>
    }
  }, []);

  return (
    <div>
      <LogInFormComponent submitHandler={logIn}/>
      {/* <RegisterFormComponent submitHandler={createUser}/> */}
    </div>
  );

  // const createStudent = useCallback(async (data) => {
  //     await axios.post('http://localhost:3000/students', data);
  //     alert(data)
  //     console.log(data.firstName)
  //     // fetchStudents();
  // }, [])
}
export default LogIn;
