import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [resources, setResources] = useState([]);
  const [activities, setActivities] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resourcesResponse = await axios.get('/resources');
        setResources(resourcesResponse.data);

        const activitiesResponse = await axios.get('/activities');
        setActivities(activitiesResponse.data);

        const documentsResponse = await axios.get('/documents');
        setDocuments(documentsResponse.data);

        const contactsResponse = await axios.get('/contacts');
        setContacts(contactsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Tableau de bord</h1>
      <h2>Ressources</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource._id}>
            {resource.nom} - {resource.description} - {resource.type} - {resource.proprietaire}
          </li>
        ))}
      </ul>
      <h2>Activités</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity._id}>
            {activity.nom} - {activity.description} - {activity.date} - {activity.responsable}
          </li>
        ))}
      </ul>
      <h2>Documents</h2>
      <ul>
        {documents.map((document) => (
          <li key={document._id}>
            {document.nom} - {document.description} - {document.type} - {document.proprietaire}
          </li>
        ))}
      </ul>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            {contact.nom} {contact.prenom} - {contact.email} - {contact.telephone} - {contact.entreprise}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
