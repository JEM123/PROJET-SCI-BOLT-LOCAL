import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', { nom, prenom, email, password, role });
      // Rediriger l'utilisateur vers la page de connexion
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleRegister}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <label>
          Prénom:
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Rôle:
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
