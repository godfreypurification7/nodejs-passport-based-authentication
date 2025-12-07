import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    axios
    .post('http://localhost:5000/login', {
        username,
        password
      })
      .then((user)=>{
        localStorage.setItem("token", user.data.token)
        console.log('user is successful loggin');
        navigate('/profile');
      })
      .catch((error)=> {
      console.error("Login error:", error);
      navigate('/login');  

      
    })
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input 
        type="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};

export default Login;
