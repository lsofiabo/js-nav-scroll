const express = require('express');
const router = express.Router();

const test = require('./test');
const nav = require('./nav');
const scroll = require('./scroll');

router.use('/', test);
router.use('/nav', nav);
router.use('/scroll', scroll);

module.exports = router;
