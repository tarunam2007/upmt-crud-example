'use strict';
let local = require('../local.env.js');
// Test specific configuration
// =================================
module.exports = {
     // Server IP
     ip: '0.0.0.0',
     // Control debug level for modules using visionmedia/debug
     DEBUG: '',
     // Server port
     port: 8080,
     // MongoDB connection options
     mongo: {
         uri: 'mongodb://10.0.75.2:27017/upmt_test'
     },
     selfURL: 'http://10.0.75.2',
     webApp: {
          url: "http://10.0.75.2:80"
     }
};