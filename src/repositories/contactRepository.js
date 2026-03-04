
const { ObjectId } = require('mongodb');
const {db_init} = require("../../db");

async function getCollection() {
    const db = await db_init();
    return db.collection('contacts');
}

async function findAll() {
    try {
        const collection = await getCollection();
        return await collection.find({}).toArray();
    } catch (err) {
        console.error('Error fetching all contacts:', err);
        throw err;
    }
}

async function findById(id) {
    try {
        const collection = await getCollection();
        return await collection.findOne({ _id: new ObjectId(id) });
    } catch (err) {
        console.error(`Error fetching contact by id ${id}:`, err);
        throw err;
    }
}


module.exports = { findAll, findById };