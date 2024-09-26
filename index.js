require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration de CORS
app.use(cors());

// Middleware pour analyser les JSON
app.use(express.json());

// Démarrer le serveur et se connecter à MongoDB asslema ya bhema
app.listen(PORT, async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI,  // Assurez-vous que cette variable est correctement définie dans votre fichier .env
            {
                dbName: 'compteurs'
            }
        );
        console.log(`MongoDB connecté et serveur démarré sur le port ${PORT}`);
    } catch (error) {
        console.error('Échec de connexion à MongoDB :', error.message);
    }
});
