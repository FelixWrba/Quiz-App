const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../models/User');

router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Account managing
router.get('/', (req, res) => {
    res.send('<h3>Managing Account</h3>');
});

// Login
router
    .route('/login')
    .get((req, res) => {
        res.render('account/login');
    })
    .post((req, res) => {
        res.send('Auth Token: < auth-token > ');
    });

// Create Account
router
    .route('/new')
    .get((req, res) => {
        res.render('account/new');
    })
    .post(async (req, res) => {
        const { name, email, password } = req.body;

        // Validation
        if (!isValid(name, 3, 12, false)) {
            res.send('Name must be 3-12 characters long and only conatin letters and underscores.');
            return;
        }
        if (!isValid(password, 8, 16, true)) {
            res.send('Password must be 8-16 characters long and cannot contain spaces');
            return;
        }
        if (!(isValid(email, 4, 64, true) && email.includes('@'))) {
            res.send('Email must be 4-64 characters long and contain an @ symbol');
            console.log(email.includes('@'));
            return;
        }
        res.send('Input valid')

        // try {
        //     const newUser = await User.create({ name, email, password });
        //     res.json({ message: 'User created!', user: newUser });
        // } catch (error) {
        //     res.status(500).json({ error: error.message });
        // }
    });

function isValid(string, min, max, extend) {
    // check if length within specified bounds
    if (string.length < min || string.length > max) {
        return false;
    }
    // Check if contains allowed characters
    if (!extend && !/^[A-Za-z_]+$/.test(string)) {
        return false;
    }
    if (extend && /\s/.test(string)) {
        return false;
    }
    return true;
}

module.exports = router;