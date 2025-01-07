import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // Rediriger l'utilisateur vers le tableau de bord
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
