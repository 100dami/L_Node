const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('contacts router');
});

router.get('/list', (req, res) => {
    res.send('contacts list');
});

module.exports = router;