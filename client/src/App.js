import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './Pages/Admin'
import User from './Pages/User'
import Login from './Pages/Login'
import Error from './Pages/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
