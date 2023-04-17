import React, { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/logout/')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return <div>Logging out...</div>;
}

export default Logout;

