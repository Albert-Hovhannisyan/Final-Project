import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import AppBarComponent from './Components/AppBarComponent';
import RegisterFormComponent from "./Components/RegisterFormComponent";
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import Home from "./Pages/Home";
import Register from "./Pages/Register"
import LogIn from "./Pages/LogIn"

function App() {
  // return <React.Fragment>
  //   {/* <AppBarComponent /> */}
  //   {/* <RegisterFormComponent /> */}
  //   </React.Fragment>;
  const [user, setUser] = React.useState(null);
  const handleLogin = () =>
    setUser({
      id: '1',
      name: 'robin',
      permissions: ['analyze'],
      roles: ['admin'],
    });
  const handleLogout = () => setUser(null);
  return (
    <>
      <div><AppBarComponent /></div>

      {/* <Navigation /> */}

      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="analytics" element={ <ProtectedRoute redirectPath="/home" isAllowed={ !!user && user.permissions.includes('analyze') } > <Analytics /> </ProtectedRoute>} />
        <Route path="admin" element={ <ProtectedRoute redirectPath="/home" isAllowed={!!user && user.roles.includes('admin')} > <Admin /> </ProtectedRoute> } />
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
  return <RegisterFormComponent />;
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