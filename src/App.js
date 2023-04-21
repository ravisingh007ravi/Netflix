import React, { useState } from 'react';
import { Navigate, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp, LogIn, Home } from './components/AllCompenents';
import Navbar from './components/Navbar';


const PriveRoute = ({ isAuthentication, ...props }) => {
  
  return isAuthentication ?
    <> <Navbar />
      <Outlet />
    </>
    :
    <Navigate replace to='/LogIn' />
}

function App() {

  const [isAuthentication, isUserAuthentication] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/SignUp' element={<SignUp />} />
        <Route path='LogIn' element={<LogIn isUserAuthentication={isUserAuthentication} />} />

        <Route path='/' element={<PriveRoute isAuthentication={isAuthentication} />}>

          <Route path='/' element={<Home />} />

        </Route>

        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/LogIn' element={<LogIn />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
