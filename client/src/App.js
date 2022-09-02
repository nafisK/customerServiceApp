import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { useState } from "react";
import Admin from './Pages/Admin'
import User from './Pages/User'
import Login from './Pages/Login'
import Error from './Pages/Error'

function App() {
    const user = localStorage.getItem('profile');
    console.log(user);

    return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
