import './App.css';
import * as React from 'react';
import { Routes, Route} from 'react-router-dom';
import AppBarComponent from './Components/AppBarComponent';
import UserAppBarComponent from './Components/UserAppBarComponent';
import AdminAppBarComponent from './Components/AdminAppBarComponent';
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import AddProduct from './Pages/AddProduct';
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<div> <AppBarComponent/><Pricing /></div>} />
        <Route path="home" element={<div> <AppBarComponent/><Pricing /></div>} />
        <Route path="register" element={<div> <AppBarComponent/><Register /></div>} />
        <Route path="login" element={<div> <AppBarComponent/><LogIn /></div>} />
        <Route path="addproduct" element={<div><AdminAppBarComponent /><AddProduct/></div>} />
        <Route path="homeUser" element={<div><UserAppBarComponent /><Pricing/></div>} />
        <Route path="homeAdmin" element={<div><AdminAppBarComponent /><Pricing/></div>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default App;