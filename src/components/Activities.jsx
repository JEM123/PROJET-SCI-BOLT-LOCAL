
import React, { useState } from 'react';
import axios from 'axios';

const Activities = () => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [responsable, setResponsable] = useState('');

  const handleCreateActivity = async (e) => {