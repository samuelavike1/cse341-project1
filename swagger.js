const options = {
    openapi: '3.0.0',
    language: 'en-US',
    autoHeaders: true,
    autoQuery: true,
    autoBody: true
};

const swaggerAutogen = require('swagger-autogen')(options);

const doc = {
    info: {
        title: 'CSE 341 Project 1 - CONTACTS API',
        description: 'A simple API to manage contacts, allowing users to create, read, update, and delete contact information. This API is built using Node.js and Express, and it uses MongoDB for data storage.',
    },
    servers: [
        {
            url: 'https://cse341-project1-sczx.onrender.com',
            description: 'Production server'
        },
        {
            url: 'http://localhost:3000',
            description: 'Local development'
        }
    ]
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
