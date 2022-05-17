import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import * as React from 'react';
import LogInFormComponent from "./Components/LogInFormComponent";
import RegisterFormComponent from "./Components/RegisterFormComponent"
import AppBarComponent from "./Components/AppBarComponent";

function DashboardUser() {
    const [users, setUsers] = React.useState([]);
    // useEffect(() => {
    //     fetchUsers();
    // }, [])

    const fetchUsers = useCallback(async () => {
        const result = await axios.get('http://localhost:3001/users');
        setUsers(result.data);
    }, [])

    const deleteUser = useCallback(async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        // fetchUsers();
    }, [])

    const createUser = useCallback(async (data) => {
        await axios.post('http://localhost:3001/users', data);
        // fetchUsers();
    }, [])

    const logIn = useCallback(async (data) => {
        const result = await axios.post('http://localhost:3001/users/login', data);
        setUsers(result.data);
        // fetchUsers();
    }, [])


    return (
        <div>
            <AppBarComponent>
                <LogInFormComponent submitHandler={ logIn } />
                {/* <RegisterFormComponent submitHandler={createUser} /> */}
            </AppBarComponent>
        </div>
    )
}

export default DashboardUser;