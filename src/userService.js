const { db_init } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllUsers() {
    try {
        const db = await db_init();
        return await db.collection('users').find({}).toArray();
    } catch (err) {
        console.error('Error fetching all users:', err);
        throw err;
    }
}

async function getUserById(id) {
    try {
        const db = await db_init();
        return await db.collection('users').findOne({ _id: new ObjectId(id) });
    } catch (err) {
        console.error(`Error fetching user by id ${id}:`, err);
        throw err;
    }
}

module.exports = { getAllUsers, getUserById };