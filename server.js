const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors'); // Importar cors para manejar CORS
const conductoresRoutes = require('./routes/conductores');

dotenv.config();

const app = express();

// Configuración de CORS para permitir solicitudes desde el frontend en localhost:3000
app.use(cors({
  origin: '*', // Permitir cualquier origen
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'] // Permitir todos los métodos
}));


// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Conductores',
      version: '1.0.0',
      description: 'API para gestionar conductores',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // Asegúrate de que la ruta sea correcta
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas de la API
app.use('/api/conductores', conductoresRoutes);

// Puerto de escucha para el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
