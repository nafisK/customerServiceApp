import React, { useState } from 'react'
import './Login.css';
import * as api from '../API';
import { useNavigate } from 'react-router-dom'

const initialState = {
  email: '',
  password: ''
}

function Login() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  };

  const handleSubmit =  async(event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const {data} = await api.signIn(formData);
      // localStorage.setItem('profile', data);
      navigate('/admin');
    } catch (error) {
      console.log(error.message);
    }
  }

  return <div className="background">
    <div className="login-panel">
      <h1 className="welcome">
        Welcome Back...
      </h1>
      <div className="divider"></div>
      <form>
        <label className="prompt"> Enter your Email: </label>
        <input className="input" name="email"
            type="text" onChange={handleChange} value={formData.email}

        />
        <label className="prompt"> Enter your password: </label>
        <input className="input" name="password"
               type="text"  onChange={handleChange} value={formData.password}
        />
      </form>
      <button className="submit-btn" onClick={handleSubmit}>Sign In</button>
    </div>
  </div>
}

export default Login
