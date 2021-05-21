var log4js = require('log4js'); 

log4js.configure({ 
    appenders: [
        {   type: 'file',
            filename: "/logs/error.log", 
            category: 'error',
            maxLogSize: 20480,
            backups: 10
        },
        {   type: "file",
            filename: "/logs/info.log", 
            category: 'info',
            maxLogSize: 20480,
            backups: 10
        },
        {   type: 'file',
            filename: "/logs/debug.log", 
            category: 'debug',
            maxLogSize: 20480,
            backups: 10
        }
    ]
});

var loggerinfo = log4js.getLogger('info'); 
var loggererror = log4js.getLogger('error');
var loggerdebug = log4js.getLogger('debug');

loggerinfo.info('Info Logger');
loggererror.info('Error Logger');
loggerdebug.info('Debugger');