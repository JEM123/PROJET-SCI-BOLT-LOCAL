import React, { useState } from 'react';
import axios from 'axios';

const Resources = () => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [proprietaire, setProprietaire] = useState('');

  const handleCreateResource = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/resources', { nom, description, type, proprietaire });
      // Réinitialiser les champs de saisie
      setNom('');
      setDescription('');
      setType('');
      setProprietaire('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Gestion des Ressources</h1>
      <form onSubmit={handleCreateResource}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>
        <label>
          Type:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
        <label>
          Propriétaire:
          <input type="text" value={proprietaire} onChange={(e) => setProprietaire(e.target.value)} />
        </label>
        <button type="submit">Créer une ressource</button>
      </form>
    </div>
  );
};

export default Resources;
