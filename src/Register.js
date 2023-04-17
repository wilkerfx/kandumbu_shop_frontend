import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { username, email, password };
    axios.post('http://127.0.0.1:8000/api/register/', data)
      .then(res => {
        console.log(res);
        setSuccess(true);
        setErrors({});
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        setSuccess(false);
        setErrors(err.response.data);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      {errors.username && <div>{errors.username}</div>}
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      {errors.email && <div>{errors.email}</div>}
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {errors.password && <div>{errors.password}</div>}
      <button type="submit">Register</button>
      {errors.non_field_errors && <div>{errors.non_field_errors}</div>}
      {success && <div>Registration successful! Please log in to continue.</div>}
    </form>
  );
}

export default Register;

