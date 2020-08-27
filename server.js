var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var configFile = require('./config.json')
var tmdashboardroutes = require('./health-check-routes/health-check-routes');
var logger = require('./logger-config/logger');
const fileOwner = 'server.js';
var cors = require('cors')
var cookieSession = require('cookie-session')




global.config = null;
const envVar = process.env.ENVIRONMENT || 'local';

process.on('uncaughtException', function (err) {
   logger.error(err.stack);
   // process.exit(1);
});

process.on('unhandledRejection', function (reason, p) {
   logger.error(reason.stack);
   // process.exit(1);
});

// var mongoconnect = () => {

//    if (envVar !== 'local') {
//       var options = {
//          user: process.env.MONGODB_USER || configFile[envVar].dev.marmaduke_conn_details.user_name,
//          pass: utilities.decodeSpecialChars(process.env.MONGODB_PWD) || configFile[envVar].dev.marmaduke_conn_details.password,
//          authMechanism: 'PLAIN',
//          sslValidate: false,
//          ssl: true,
//          authSource: '$external',
//          useNewUrlParser: true,
//          reconnectTries: 3,
//          reconnectInterval: 1000
//       }
//       var uri = process.env.MONGODB_URL || "mongodb://mdr01modb3:27020/MongoDevScooby01";
//       mongoose.connect(uri, options, (err, client) => {
//          logger.info('mongodb url: ' + uri);
//          if (err) {
//             return logger.error(err, 400, fileOwner);
//          }
//          logger.info('connected to MongoDB', fileOwner);
//       });
//    } else {
//       const options = {
//          useNewUrlParser: true,
//          reconnectTries: 3,
//          reconnectInterval: 1000
//       };
//       mongoose.connect(configFile[envVar].mongo_conn_details.mongo_db_url, options, (err, client) => {
//          if (err) {
//             return logger.error(err, 400);
//          }
//          logger.info('connected to MongoDB');
//       });
//    }

// };


// mongoconnect();

// mongoose.connection.on('connected', () => {
//    logger.info('MongoDB connected', fileOwner);

// });

// mongoose.connection.on('disconnected', () => {
//    mongoconnect();
//    logger.info('MongoDB connection lost', fileOwner);
// });

// mongoose.connection.on('reconnect', () => {
//    logger.info('MongoDB reconnected', fileOwner);
// });
app.set('trust proxy', true)
app.use(cookieSession({
   signed: false
}))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Methods', "POST,DELETE, PUT, GET,OPTIONS");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With , Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
   next();
})
app.use('/api', tmdashboardroutes);
app.use('/', function (req, res) {
   console.log("here at last")
   res.json({
      status: 'API Its Default',
      message: 'Welcome to Default!'
   });
})



var server = app.listen((envVar !== 'local') ? 8080 : 8099, function () {
   // var server = app.listen((envVar !== 'local') ? 8080 : 8067, function () {
   var host = server.address().address;
   var port = server.address().port;
   logger.info(`Example app listening at our http://${host}:${port}`, fileOwner);
});
