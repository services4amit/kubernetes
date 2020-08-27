var router = require('express').Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var jwt = require('jsonwebtoken');
const axios = require('axios');

router.get('/test', function (req, res) {
    // const userJwt = jwt.sign({
    //     id: 123,
    //     email: "test@g.com"
    // }, 'asfd');

    // req.session.jwt = userJwt;
    res.json({
        status: 'API Its Working yesssss',
        message: 'Welcome to Health Check Manager Microservice!'
    });

});

router.post('/auth', function (req, res) {
    const userJwt = jwt.sign({
        id: 123,
        email: req.body.email
    }, 'asfd');

    req.session.jwt = userJwt;
    console.log("req", req.session.jwt);
    res.status(200).send({
        status: 'API Its Working yesssss',
        message: 'Welcome to Health Check Manager Microservice!'
    })
    // res.json({
    //     status: 'API Its Working yesssss',
    //     message: 'Welcome to Health Check Manager Microservice!'
    // });

});
router.get('/', function (req, res) {
    console.log("came here")
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Health Check Manager Microservice!'
    });
});
module.exports = router;
