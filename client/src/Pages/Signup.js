import React, { useState } from 'react'
import './Signup.css';
import * as api from '../API';
import { useNavigate } from 'react-router-dom'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function Signup() {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const { data } = await api.signUp(formData);
            // localStorage.setItem('profile', data);
            // navigate('/admin');
        }
        catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="background">
            <div className="signup-panel">
                <h1 className="welcome-1">
                    Sign Up...
                </h1>
                <form>
                    <label className="prompt-1"> First Name </label>
                    <input className="input-1" name="firstName" placeholder='Enter your first name here'
                        type="text" onChange={handleChange} value={formData.firstName}
                    />

                    <label className="prompt-1"> Last Name </label>
                    <input className="input-1" name="lastName" placeholder='Enter your last name here'
                        type="text" onChange={handleChange} value={formData.lastName}
                    />

                    <label className="prompt-1"> Email </label>
                    <input className="input-1" name="email" placeholder='Enter your email here'
                        type="email" onChange={handleChange} value={formData.email}
                    />

                    <label className="prompt-1"> Password </label>
                    <input className="input-1" name="password" placeholder='Enter your password here'
                        type="password" onChange={handleChange} value={formData.password}
                    />

                    <label className="prompt-1"> Confirm Password </label>
                    <input className="input-1" name="confirmPassword" placeholder='Enter your password again here'
                        type="password" onChange={handleChange} value={formData.confirmPassword}
                    />
                </form>
                <button className="submit-btn-1" onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    )
}