import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Resources from './components/Resources';
import Activities from './components/Activities';
import Documents from './components/Documents';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/login">Connexion</Link>
            </li>
            <li>
              <Link to="/register">Inscription</Link>
            </li>
            <li>
              <Link to="/dashboard">Tableau de bord</Link>
            </li>
            <li>
              <Link to="/resources">Ressources</Link>
            </li>
            <li>
              <Link to="/activities">Activités</Link>
            </li>
            <li>
              <Link to="/documents">Documents</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/documents">
            <Documents />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur ControleIntérieur</h1>
      <p>
        ControleIntérieur est une application de contrôle interne d'entreprise qui vous permet de gérer vos activités, ressources, documents et contacts.
      </p>
    </div>
  );
};

export default App;
