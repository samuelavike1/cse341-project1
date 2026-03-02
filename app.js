require('dotenv').config();
const express = require('express');
const app = express();
const {db_init} = require('./db');
const port = process.env.SERVER_PORT || 3000;


app.use(require('./src/routes/routes'));


async function startServer() {
    try {
        await db_init();
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
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