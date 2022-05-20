import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import RegisterFormComponent from "../Components/RegisterFormComponent"
import Header from "../Components/Header";

function Register(){
    const [users, setUsers] = useState([]);
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
        const result = await axios.post('http://localhost:3001/users/register', data);
        console.log(result);
        // setUsers(result.data);
        // fetchUsers();
        // if (result.data) {
        //     localStorage.setItem("x-access-token", JSON.stringify(result.data));
        //   }

        // getUser()
    // console.log(result.data)
    }, [])
   

        return (      
                <div>
                    <div><RegisterFormComponent submitHandler={registerUser}/></div>
                </div>
            )

}

export default Register;
