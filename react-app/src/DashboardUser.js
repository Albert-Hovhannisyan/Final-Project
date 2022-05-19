import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LogInFormComponent from "./Components/LogInFormComponent";
import RegisterFormComponent from "./Components/RegisterFormComponent"
import AppBarComponent from "./Components/AppBarComponent";

function DashboardUser() {
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetchUsers();
    // }, [])

    // const fetchUsers = useCallback(async () => {
    //     const result = await axios.get('http://localhost:3001/users');
    //     setUsers(result.data);
    // }, [])

    // const deleteUser = useCallback(async (id) => {
    //     await axios.delete(`http://localhost:3001/users/${id}`);
    //     // fetchUsers();
    // }, [])

    // const createUser = useCallback(async (data) => {
    //     await axios.post('http://localhost:3001/users', data);
    //     // fetchUsers();
    // }, [])

    const logIn = useCallback(async (data) => {
        console.log(data);
        // const result = await axios.post('http://localhost:3001/users/login', data);
        // setUsers(result.data);
        // fetchUsers();
    }, [])

    const ggg = useCallback(async (data) => {
        // await axios.post('http://localhost:3000/students', data);
        alert('data')
        console.log('data')
        // fetchStudents();
    }, [])

        return (      
                <div>
                    <AppBarComponent />
                        {/* <div><LogInFormComponent submitHandler={logIn}/></div> */}
                        {/* <RegisterFormComponent submitHandler={ createUser } /> */}
                    
                    
                </div>
            )


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

export default DashboardUser;

