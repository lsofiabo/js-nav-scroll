const express = require('express');
const router = express.Router();

const Test = require('../class/test');

// ================================================================

router.get('/', function (req, res) {
    res.render('nav', {
        name: 'nav',
        component: [],

        title: 'Nav',

        data: {
            test: new Test().test,
        },
    });
});

module.exports = router;
