import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import AppBarComponent from './Components/AppBarComponent';
import UserAppBarComponent from './Components/UserAppBarComponent';
import AdminAppBarComponent from './Components/AdminAppBarComponent';
import Home from "./Pages/Home";
import HomeAdmin from "./Pages/HomeAdmin";
import HomeUser from "./Pages/HomeUser";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import AddProduct from './Pages/AddProduct';
import DashboardUser from './DashboardUser';
import Pricing from "./Pages/Pricing";

function App() {

  const [user, setUser] = React.useState(null);

  // const handleLogin = () =>
  //   setUser({
  //     id: '1',
  //     name: 'robin',
  //     permissions: ['analyze'],
  //     roles: ['admin'],
  //   });
  // const handleLogout = () => setUser(null);

  return (
    <>
      {/* <DashboardUser /> */}
      <AppBarComponent/>
      {/* <UserAppBarComponent/> */}
      {/* <AdminAppBarComponent/> */}
      {/* <Navigation /> */}

      {/* {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )} */}
      
      <Routes>
        <Route index element={<AppBarComponent />} />
        <Route path="home" element={<Pricing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="admin" element={<AdminAppBarComponent />} />
        <Route path="user" element={<UserAppBarComponent />} />
        {/* <Route path="shoppingcart" element={<ShoppingCart />} /> */}

        {/* <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="analytics" element={ <ProtectedRoute redirectPath="/home" isAllowed={ !!user && user.permissions.includes('analyze') } > <Analytics /> </ProtectedRoute>} />
         */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

const Navigation = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/login">LogIn</Link>
    <Link to="/register">Register</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

const Dashboard = () => {
  return;
};

const Analytics = () => {
  return (
    <h2>
      Analytics (Protected: authenticated user with permission
      'analyze' required)
    </h2>
  );
};

const Admin = () => {
  return (
    <h2>
      Admin (Protected: authenticated user with role 'admin' required)
    </h2>
  );
};

const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/home',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default App;