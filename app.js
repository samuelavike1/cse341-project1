require('dotenv').config();
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const { db_init } = require('./db');
const cors = require('cors');
const port = process.env.SERVER_PORT || 3000;

const morgan = require('morgan');
app.use(morgan('dev'));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors());
app.use(express.json());
app.use(require('./src/routes/contactRoutes'));


async function startServer() {
    try {
        await db_init();
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
            console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
        });
    } catch (err) {
        console.error('Failed to initialize database. Server not started.', err);
        process.exit(1);
    }
}

startServer().catch((err) => {
    console.error('Unexpected error:', err);
    process.exit(1);
});