const {getAllUsers, getUserById} = require("../services/userService");

async function getUsers(req, res)  {
    const users = await getAllUsers();
    res.json(users);
}

async function getUser(req, res) {
    try {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


module.exports = { getUsers, getUser };