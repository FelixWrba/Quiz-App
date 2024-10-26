const express = require('express');
const router = express.Router();

router.get('/most_played', (req, res) => {
    res.send('<h3>meistgespielt</h3>');
});

router.get('/search', (req, res) => {
    res.send(`<h3>You searched ${req.query.search}</h3>`);
});

router.post('/upload_quiz', (req, res) =>{
    res.send(`Title: ${req.body.title}\n Description: ${req.body.description}`);
    console.log(req.body);
})

module.exports = router;