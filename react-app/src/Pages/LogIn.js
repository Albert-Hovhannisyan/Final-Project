import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LogInFormComponent from "../Components/LogInFormComponent";
import RegisterFormComponent from "../Components/RegisterFormComponent";
import AppBarComponent from "../Components/AppBarComponent";
import Header from "../Components/Header";

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
      getUsers();
  }, [])

  const logIn = useCallback(async (data) => {
    const result = await axios.post("http://localhost:3001/users/login", data);
    console.log(result.data);
    // setUsers(result.data);
    if (result.data) {
      localStorage.setItem("x-access-token", JSON.stringify(result.data));
    }
    getUsers();
  }, []);

  return (
    <div>
      <LogInFormComponent submitHandler={logIn} />
      <RegisterFormComponent submitHandler={createUser}/>
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
