import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LogInFormComponent from "../Components/LogInFormComponent";
import RegisterFormComponent from "../Components/RegisterFormComponent";
import AppBarComponent from "../Components/AppBarComponent";
import Header from "../Components/Header";

function LogIn() {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //     fetchUsers();
  // }, [])

  // const fetchUsers = useCallback(async () => {
  //     const result = await axios.get('http://localhost:3001/users');
  //     setUsers(result.data);
  // }, [])

  const getUser = useCallback(async () => {
    const result = await axios.get(`http://localhost:3001/users/`, {
      headers: Header(),
    });
    console.log(result);
    // fetchUsers();
  }, []);

  // const createUser = useCallback(async (data) => {
  //     await axios.post('http://localhost:3001/users', data);
  //     // fetchUsers();
  // }, [])

  const logIn = useCallback(async (data) => {
    s;
    const result = await axios.post("http://localhost:3001/users/login", data);
    console.log(result.data);
    // setUsers(result.data);
    // fetchUsers();
    if (result.data) {
      localStorage.setItem("x-access-token", JSON.stringify(result.data));
    }
    getUser();
    // console.log(result.data)
  }, []);

  return (
    <div>
      {/* <AppBarComponent /> */}
      <div>
        <LogInFormComponent submitHandler={logIn} />
      </div>
      {/* <RegisterFormComponent submitHandler={ createUser } /> */}
    </div>
  );

  // const createStudent = useCallback(async (data) => {
  //     await axios.post('http://localhost:3000/students', data);
  //     alert(data)
  //     console.log(data.firstName)
  //     // fetchStudents();
  // }, [])

  // return (
  //     <div>
  //         <StudentForm submitHandler={createStudent} />
  //         {/* <StudentList deleteStudentHandler={deleteStudent} students={students} /> */}
  //     </div>
  // )
}

export default LogIn;
