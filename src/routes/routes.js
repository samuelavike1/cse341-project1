const {getAllUsers, getUserById} = require("../userService");
const router = require("express").Router();

router.get('/users', async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
});

router.get('/users/:id', async (req, res) => {
    console.log(req.params.id);
    const user = await getUserById(req.params.id);
    res.json(user);
})


module.exports = router;