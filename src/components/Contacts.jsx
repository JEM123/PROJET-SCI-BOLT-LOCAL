import React, { useState } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [entreprise, setEntreprise] = useState('');

  const handleCreateContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contacts', { nom, prenom, email, telephone, entreprise });
      // Réinitialiser les champs de saisie
      setNom('');
      setPrenom('');
      setEmail('');
      setTelephone('');
      setEntreprise('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Gestion des Contacts</h1>
      <form onSubmit={handleCreateContact}>
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
          Téléphone:
          <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </label>
        <label>
          Entreprise:
          <input type="text" value={entreprise} onChange={(e) => setEntreprise(e.target.value)} />
        </label>
        <button type="submit">Créer un contact</button>
      </form>
    </div>
  );
};

export default Contacts;
