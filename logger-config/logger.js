const moment = require('moment');

module.exports.debug = (message, filename, method) => {
    logToConsole('DEBUG', null, message, filename, method);
};

module.exports.info = (message, filename, method) => {
    logToConsole('INFO', null, message, filename, method);
};

module.exports.warn = (message, filename, method) => {
    logToConsole('WARN', null, message, filename, method);
};

module.exports.error = (message, errorCode, filename, method) => {
    logToConsole('ERROR', errorCode, message, filename, method);
};

function logToConsole(type, errorCode, message, filename, methodName) {
    let timestamp = moment().local().format('YYYY-MM-DD HH:mm:sssZ');
    try {
        var logStatement = filename && filename.length > 0 ? `FILE: ${filename} ` : '';

        if (methodName  && methodName.length > 0) {
            logStatement+=`METHOD: ${methodName}`;
        }
        if (logStatement) {
            logStatement = `[${logStatement}] : `;
        }
        logStatement+=toString(message);

        if (errorCode) {
            logStatement = `${errorCode} : ${logStatement}`;
        }
        let completeStatement = `[${timestamp}] : ${type} : ` + logStatement
        console.log(completeStatement);
    } catch(err) {
        let completeStatement = `[${timestamp}] : ${type} : ` + toString(message)
        console.log(completeStatement);
    }
}

function toString(value) {
    if (typeof value === 'string') {
        return value;
    }

    try {
        var stringValue = value;
        if (value instanceof Error) {
            stringValue =  value.toString();
        } else {
            stringValue = JSON.stringify(value);
        }
        return stringValue;
    } catch (err) {
        return value;
    }
}