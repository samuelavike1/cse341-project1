const {getAllUsers, getUserById} = require("../userService");
const router = require("express").Router();

router.get('/users', async (req, res) => {
    const users = await getAllUsers();
    users.then((users) => {
        res.header('Content-Type','application/json');
        res.status(200).json(users);
    })
    res.json(users);
});

router.get('/users/:id', async (req, res) => {
    console.log(req.params.id);
    const user = await getUserById(req.params.id);
    res.json(user);
})


module.exports = router;