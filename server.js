const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connexion à la base de données MySQL
const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Modèles Mongoose
const User = mongoose.model('User', {
  nom: String,
  prenom: String,
  email: String,
  password: String,
  role: String
});

const Resource = mongoose.model('Resource', {
  nom: String,
  description: String,
  type: String,
  proprietaire: String
});

const Activite = mongoose.model('Activite', {
  nom: String,
  description: String,
  date: Date,
  responsable: String
});

const Document = mongoose.model('Document', {
  nom: String,
  description: String,
  type: String,
  proprietaire: String
});

const Contact = mongoose.model('Contact', {
  nom: String,
  prenom: String,
  email: String,
  telephone: String,
  entreprise: String
});

// Endpoints API
app.post('/register', async (req, res) => {
  try {
    const { nom, prenom, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ nom, prenom, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/resources', async (req, res) => {
  try {
    const { nom, description, type, proprietaire } = req.body;
    const resource = new Resource({ nom, description, type, proprietaire });
    await resource.save();
    res.status(201).json({ message: 'Ressource créée avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Autres endpoints API...

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});
