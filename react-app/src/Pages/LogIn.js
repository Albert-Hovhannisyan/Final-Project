import axios from "axios";
import { useCallback, useState } from "react";
import LogInFormComponent from "../Components/LogInFormComponent";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  const logIn = useCallback(async (data) => {
    try{
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
    
    if (role === "admin") {
      console.log("ADMIN");
      navigate("/homeAdmin");
    } else {
      console.log("USER");
      navigate("/homeUser");
    }
    } catch(error){
      return alert(error)
    }
  }, []);
  

  return (
    <div>
      <LogInFormComponent submitHandler={logIn} />
    </div>
  );
}
export default LogIn;
