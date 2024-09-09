
const User =('../models/usersModel');

const getUsers = (req, res) => {
    User.getAllUsers((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message});
        } else {
            res. json(results);
        }
    });
};

const createUser = (req, res) => {
    const {  name, email } = req.body;
    User.createUser(nane, email, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message});
         } else {
            res.status(201).json({ id: result.insertId, name, email });
         }
        });
};


module.exports = {
    getUsers,
    createUser
};
