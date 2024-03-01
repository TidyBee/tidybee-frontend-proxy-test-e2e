// server.js
const express = require('express');
const app = express();
const port = 7001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

// Utiliser les routes définies dans le fichier apiRoutes.js
const apiRoutes = require('./routes/apiRoutes');
app.use('/Gateway', apiRoutes);

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
