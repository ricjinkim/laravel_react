import React from 'react';
import axios from "axios";
import './App.css';
import { useEffect } from "react";

function App() {
  const http = axios.create({
    baseURL: 'http://127.0.0.1',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
  });

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    
    const csrf = await http.get('sanctum/csrf-cookie');
    console.log("csrf=> ", csrf);

    const login = await http.post('/api/login', 
    {
      email: 'admin@example.com',
      password: 'secret',
    });
    console.log("login => ", login)
  }

  return(
    <div>...</div>
  );

}

export default App;
