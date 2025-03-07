import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            {notification.message} - {new Date(notification.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
