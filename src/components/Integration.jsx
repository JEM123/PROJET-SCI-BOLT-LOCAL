import React from 'react';
import { Link } from 'react-router-dom';

const Integration = () => {
  return (
    <div>
      <h1>Intégrations</h1>
      <p>
        ControleIntérieur peut être intégré avec les outils de gestion de projet, de communication et de finances les plus populaires.
      </p>
      <ul>
        <li>
          <Link to="/integration/project-management">Gestion de projet</Link>
        </li>
        <li>
          <Link to="/integration/communication">Communication</Link>
        </li>
        <li>
          <Link to="/integration/finance">Finance</Link>
        </li>
      </ul>
    </div>
  );
};

export default Integration;
