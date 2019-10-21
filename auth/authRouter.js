const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const secrets = require('../config/secrets.js');
const users = require('../users/usersAccess.js');

router.post('/register', validateUserRegistration, (req, res) => {
    const userInfo = req.body;
    const hash = bcrypt.hashSync(userInfo.password, 12);
    userInfo.password = hash;

    users.add(userInfo)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


// router.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     users.getBy({ username })
//         .first()
//         .then(user => {
//             if (user) {
//                 res.status(200).json(user);
//             } else {
//                 res.status(401).json({ message: 'Invalid Credentials' });
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });


router.post('/login', validateUser, (req, res) => {
    const { username, password } = req.body;
    users.getBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

function generateToken(user) {
    const payload = {
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jswSecret, options);
};
//middlewares

function validateUser(req, res, next) {
    const { username, password, email } = req.body;
    if (!username && !password && !email) {
        return res.status(400).json({ message: 'Username and Password are required!' })
    }
    if (!username) {
        return res.status(400).json({ message: 'Username is required!' })
    }
    if (!password) {
        return res.status(400).json({ message: 'Password is required!' })
    }
    next();
}

function validateUserRegistration(req, res, next) {
    const { username, password, email } = req.body;
    if (!username && !password && !email) {
        return res.status(400).json({ message: 'Username and Password are required!' })
    }
    if (!username) {
        return res.status(400).json({ message: 'Username is required!' })
    }
    if (!password) {
        return res.status(400).json({ message: 'Password is required!' })
    }
    if (!email) {
        return res.status(400).json({ message: 'Email is required!' })
    }
    next();
}

module.exports = router;