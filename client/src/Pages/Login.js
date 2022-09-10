import React, { useState } from 'react'
import './Login.css';
import * as api from '../API';
import { useNavigate } from 'react-router-dom'

const initialState = {
  email: '',
  password: ''
}

export default function Login() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { data } = await api.signIn(formData);
      // localStorage.setItem('profile', data);
      navigate('/admin');
    }
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="background">
      <div className="login-panel">
        <h1 className="welcome">
          Welcome Back...
        </h1>
        <form>
          <label className="prompt"> Email </label>
          <input className="input" name="email" placeholder='Enter your email here'
            type="email" onChange={handleChange} value={formData.email}
          />
          <label className="prompt"> Password </label>
          <input className="input" name="password" placeholder='Enter your password here'
            type="password" onChange={handleChange} value={formData.password}
          />
        </form>
        <button className="submit-btn" onClick={handleSubmit}>Sign In</button>
      </div>
    </div>
  )
}