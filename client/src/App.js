import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './Pages/Admin'
import User from './Pages/User'
import Login from './Pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </Router>
  )
}

export default App
