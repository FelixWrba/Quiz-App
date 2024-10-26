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
        try {
            const newUser = await User.create({ name, email, password });
            res.json({ message: 'User created!', user: newUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

module.exports = router;