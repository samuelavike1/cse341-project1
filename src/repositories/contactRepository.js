const { ObjectId } = require('mongodb');
const { db_init } = require("../../db");

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

async function create(contactData) {
    try {
        const collection = await getCollection();
        return await collection.insertOne(contactData);
    } catch (err) {
        console.error('Error creating contact:', err);
        throw err;
    }
}

async function update(id, contactData) {
    try {
        const collection = await getCollection();
        return await collection.findOneAndUpdate(
            {_id: new ObjectId(id)},
            {$set: contactData},
            {returnDocument: 'after'}
        );
    } catch (err) {
        console.error(`Error updating contact ${id}:`, err);
        throw err;
    }
}

async function remove(id) {
    try {
        const collection = await getCollection();
        return await collection.deleteOne({_id: new ObjectId(id)});
    } catch (err) {
        console.error(`Error deleting contact ${id}:`, err);
        throw err;
    }
}

module.exports = { findAll, findById, create, update, remove };