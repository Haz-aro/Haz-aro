const db = require(' ../config/db');

const createUser = (name, email, callback) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], callback);
};

const getAllUsers = (callback) => {
    const sql = 'SELECT * FROM users';
    db.querv(sal, callback);
};

module.exports = {
    createUser,
    getAllUsers
};
